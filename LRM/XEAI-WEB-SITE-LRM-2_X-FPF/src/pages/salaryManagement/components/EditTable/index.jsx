import { useState } from 'react';
import { Table } from 'lanlinker';
import { Form, InputNumber, Button } from 'antd';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `请输入${title}!`,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default ({ onSave, ...props }) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.id === editingKey;

  const edit = record => {
    form.setFieldsValue(record);
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async id => {
    const res = await form.validateFields();
    onSave({ ...res, id });
    setEditingKey('');
  };

  const columns = [
    {
      title: '工号',
      dataIndex: 'aa',
      fixed: 'left',
      width: 80,
      ellipsis: true,
    },
    {
      title: '姓名',
      dataIndex: 'a',
      fixed: 'left',
      width: 120,
      ellipsis: true,
    },
    {
      title: '身份证号',
      dataIndex: 'b',
      fixed: 'left',
      width: 170,
      ellipsis: true,
    },
    {
      title: '银行卡号',
      dataIndex: 'c',
      width: 200,
      ellipsis: true,
    },
    {
      title: '岗位',
      dataIndex: 'd',
      width: 150,
      ellipsis: true,
    },
    {
      title: '出勤工时',
      dataIndex: 'e',
      width: 130,
      editable: true,
      ellipsis: true,
    },
    {
      title: '工时单价(元)',
      dataIndex: 'f',
      width: 130,
      editable: true,
      ellipsis: true,
    },
    {
      title: '计件工资/件',
      dataIndex: 'g',
      width: 130,
      editable: true,
      ellipsis: true,
    },
    {
      title: '计件结算数量',
      dataIndex: 'h',
      width: 130,
      editable: true,
      ellipsis: true,
    },
    {
      title: '应发金额',
      children: [
        {
          title: '基本工资金额',
          dataIndex: 'i1',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '岗位工资金额',
          dataIndex: 'i2',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '绩效工资金额',
          dataIndex: 'i3',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '奖金金额',
          dataIndex: 'i4',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '津贴金额',
          dataIndex: 'i5',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '补贴金额',
          dataIndex: 'i6',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '加班工资金额',
          dataIndex: 'i7',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '应发其他金额',
          dataIndex: 'i8',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '应发金额',
          dataIndex: 'i9',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '扣发金额',
          dataIndex: 'i10',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '实发金额',
          dataIndex: 'i11',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '借款金额',
          dataIndex: 'i12',
          editable: true,
          ellipsis: true,
          width: 130,
        },
        {
          title: '待发金额',
          dataIndex: 'i13',
          editable: true,
          ellipsis: true,
          width: 130,
        },
      ],
    },
    {
      title: '备注',
      dataIndex: 'k',
      ellipsis: true,
    },
    {
      title: '操作',
      fixed: 'right',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Button type="link" size="small" onClick={() => save(record.id)}>
              保存
            </Button>
            <Button type="link" size="small" onClick={() => cancel()}>
              取消
            </Button>
          </>
        ) : (
          <Button
            type="link"
            size="small"
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            修改
          </Button>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (col.children) {
      col.children = col.children.map(v => ({
        ...v,
        onCell: record => {
          return {
            record,
            dataIndex: v.dataIndex,
            title: v.title,
            editing: isEditing(record),
          };
        },
      }));
      return col;
    }
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => {
        return {
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        };
      },
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        {...props}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        scroll={{ x: 3200 }}
        columns={mergedColumns}
        pagination={{
          onChange() {
            setEditingKey('');
          },
        }}
      />
    </Form>
  );
};
