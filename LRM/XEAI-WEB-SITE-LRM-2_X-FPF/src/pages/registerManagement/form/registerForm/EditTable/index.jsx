import { useState } from 'react';
import { Table, Form, Button, Input } from 'antd';

export default ({ value, onChange, disabled }) => {
  const [data, setData] = useState(value);
  const [createForm] = Form.useForm(); // 新增表单
  const [editForm] = Form.useForm(); // 编辑表单
  const [editingKey, setEditingKey] = useState(''); // 正在编辑的行
  const isEditing = record => record && record.id === editingKey;

  const columns = [
    {
      title: '序号',
      dataIndex: 'a',
      width: 120,
      editable: true,
    },
    {
      title: '姓名',
      dataIndex: 'b',
      width: 120,
      editable: true,
    },
    {
      title: '身份关系',
      dataIndex: 'c',
      width: 120,
      editable: true,
    },
    {
      title: '联系人电话',
      dataIndex: 'd',
      width: 120,
      editable: true,
    },
    {
      title: '操作',
      width: 120,
      render(_, record) {
        return editingKey === record.id ? (
          <>
            <Button
              type="link"
              size="small"
              disabled={disabled}
              onClick={async () => {
                const res = await editForm.validateFields();
                const newData = data.map(v =>
                  v.id === editingKey ? { ...v, ...res } : v,
                );

                setData(newData);
                onChange(newData);
                setEditingKey('');
              }}
            >
              保存
            </Button>
            <Button
              type="link"
              size="small"
              disabled={disabled}
              onClick={async () => {
                setEditingKey('');
              }}
            >
              取消
            </Button>
          </>
        ) : (
          <>
            <Button
              type="link"
              size="small"
              disabled={disabled || editingKey !== ''}
              onClick={() => {
                setEditingKey(record.id);
                editForm.setFieldsValue(record);
              }}
            >
              修改
            </Button>
            <Button
              type="link"
              size="small"
              danger
              disabled={disabled || editingKey !== ''}
              onClick={() => {
                const newData = data.filter(v => v.id !== record.id);
                setData(newData);
                onChange(newData);
              }}
            >
              删除
            </Button>
          </>
        );
      },
    },
  ];

  const EditableRow = ({ children, row, record, ...restProps }) => {
    return (
      <>
        {!row && (
          <Form form={createForm} component={false}>
            <tr>
              {columns.map((col, i) => {
                if (col.editable) {
                  return (
                    <td key={i}>
                      <Form.Item
                        name={col.dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                          {
                            required: true,
                            message: `请填写${col.title}!`,
                          },
                        ]}
                      >
                        <Input disabled={disabled} />
                      </Form.Item>
                    </td>
                  );
                }
                if (col.title === '操作') {
                  return (
                    <td key={i}>
                      <Button
                        type="link"
                        size="small"
                        disabled={disabled}
                        onClick={async () => {
                          const res = await createForm.validateFields();
                          const newData = [
                            ...data,
                            { ...res, id: Math.random() },
                          ];
                          setData(newData);
                          onChange(newData);
                        }}
                      >
                        添加
                      </Button>
                    </td>
                  );
                }
                return <td key={i}></td>;
              })}
            </tr>
          </Form>
        )}
        <Form form={editForm} component={false}>
          <tr {...restProps}>
            {React.Children.map(children, (child, i) => {
              const editing = isEditing(record);

              return columns[i].editable && editing ? (
                <td>
                  <Form.Item
                    name={columns[i].dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                      {
                        required: true,
                        message: `请填写${columns[i].title}!`,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </td>
              ) : (
                child
              );
            })}
          </tr>
        </Form>
      </>
    );
  };

  return (
    <Table
      rowKey="id"
      columns={columns}
      onRow={(record, index) => {
        return { record, row: index };
      }}
      pagination={{
        onChange() {
          createForm.resetFields();
        },
      }}
      components={{
        body: {
          row: EditableRow,
        },
      }}
      dataSource={data}
    />
  );
};
