/**
 * @module 通勤流水查询
 */
import { useState } from 'react';
import { PageHeaderWrapper, Table, ButtonModal } from 'lanlinker';
import { Form, Button, Input, Select, DatePicker, Card } from 'antd';

const { RangePicker } = DatePicker;

export default () => {
  const [form] = Form.useForm();

  return (
    <PageHeaderWrapper>
      <Card>
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={columns}
          actions={{
            right: (
              <Form
                form={form}
                layout="inline"
                initialValues={{ a: '1', b: '1', c: '1' }}
              >
                <Form.Item label="通勤标志" name="b">
                  <Select>
                    <Select.Option value="1">入场</Select.Option>
                    <Select.Option value="2">出场</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="通勤类型" name="c">
                  <Select>
                    <Select.Option value="1">固定闸机</Select.Option>
                    <Select.Option value="2">移动考勤</Select.Option>
                    <Select.Option value="3">手工补录</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="通勤时间" name="d">
                  <RangePicker style={{ width: 220 }}></RangePicker>
                </Form.Item>
                <Form.Item name="e">
                  <InputWrapper />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">查询</Button>
                </Form.Item>
                <Form.Item>
                  <Button onClick={() => form.resetFields()}>重置</Button>
                </Form.Item>
              </Form>
            ),
          }}
        ></Table>
      </Card>
    </PageHeaderWrapper>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入流水编号',
    '2': '请输入姓名',
    '3': '请输入身份证号',
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
            <Select.Option value="1">流水编号</Select.Option>
            <Select.Option value="2">姓名</Select.Option>
            <Select.Option value="3">身份证号</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};

const dataSource = [{ id: '1', a: '1' }];

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
    width: 130,
    ellipsis: true,
  },
  {
    title: '通勤时间',
    width: 150,
    ellipsis: true,
  },
  {
    title: '通勤标志',
    width: 100,
    ellipsis: true,
  },
  {
    title: '通勤类型',
    width: 120,
    ellipsis: true,
  },
  {
    title: '姓名',
    width: 120,
    ellipsis: true,
  },
  {
    title: '身份证号',
    width: 130,
    ellipsis: true,
  },
  {
    title: '详情',
    width: 100,
    render(record) {
      return (
        <ButtonModal
          title="刷卡照片"
          width={700}
          footer={null}
          buttonProps={{ text: '查看详情', type: 'link', size: 'small' }}
        >
          <img
            src={
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591184248292&di=e42b348f9a189cb6e4aefe34d07cc5cd&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3174986702%2C3347791368%26fm%3D214%26gp%3D0.jpg'
            }
            style={{ width: '600px', maxHeight: '480px', margin: '0 auto' }}
          />
        </ButtonModal>
      );
    },
  },
];
