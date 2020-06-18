/**
 * @module 评分模态框
 */
import { useState, forwardRef, useEffect, useRef } from 'react';
import { Table, ButtonModal } from 'lanlinker';
import { Form, Input, Select, Button } from 'antd';

export default forwardRef((_, ref) => {
  const [data, setData] = useState([
    {
      id: 'a',
      a: '1',
      ss: '24',
    },
    {
      id: 'b',
      a: '1',
      ss: '54',
    },
    {
      id: 'c',
      a: '1',
      ss: '223',
    },
  ]);
  const selectedRef = useRef([]);
  const scoreRef = useRef();

  useEffect(() => {
    ref.current = data;
  }, []);

  return (
    <Table
      rowKey="id"
      dataSource={data}
      rowSelection={{
        onChange(keys) {
          selectedRef.current = keys;
        },
      }}
      components={{
        body: {
          cell: ({ children, editable, record, ...restProps }) => {
            if (editable) {
              return (
                <td {...restProps}>
                  <Input
                    defaultValue={record.ss}
                    style={{ width: 100 }}
                    onChange={e => {
                      const newData = ref.current.map(v =>
                        v.id === record.id ? { ...v, ss: e.target.value } : v,
                      );
                      ref.current = newData;
                    }}
                  />
                </td>
              );
            } else {
              return <td {...restProps}>{children}</td>;
            }
          },
        },
      }}
      columns={columns}
      actions={{
        left: (
          <ButtonModal
            title="批量评分"
            buttonProps={{ text: '批量评分', type: 'primary' }}
            onOk={(_, close) => {
              const newData = ref.current.map(v =>
                selectedRef.current.includes(v.id)
                  ? { ...v, ss: scoreRef.current.state.value }
                  : v,
              );
              ref.current = newData;
              setData(newData);
              close();
            }}
          >
            <Form layout="vertical">
              <Form.Item label="请填写培训评分">
                <Input placeholder="请输入1-100之间的数字" ref={scoreRef} />
              </Form.Item>
            </Form>
          </ButtonModal>
        ),
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item>
              <InputWrapper />
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
          </Form>
        ),
      }}
    />
  );
});

const InputWrapper = () => {
  const holder = {
    '1': '请输入姓名',
    '2': '请输入身份证号',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select
            onSelect={e => setPlaceHolder(holder[e])}
            style={{ width: 100 }}
          >
            <Select.Option value="1">姓名</Select.Option>
            <Select.Option value="2">身份证号</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
  },
  {
    title: '身份证号',
    dataIndex: '4',
  },
  {
    title: '岗位',
    dataIndex: '5',
  },
  {
    title: '培训名称',
    dataIndex: '6',
  },
  {
    title: '签到时间',
    dataIndex: '6',
  },
  {
    title: '是否合格',
    dataIndex: '6',
  },
  {
    title: '培训评分',
    dataIndex: 'ss',
    onCell: record => ({ record, editable: true }),
  },
];
