/**
 * title: 可添加行表格
 */
import React, { useState } from 'react';
import { EditTable,Popconfirm } from 'lanlinker';
import { Button,  Form, Select } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [data, setData] = useState(originData);

  const save = async id => {
    try {
      const row = await form.validateFields();

      // 本地数据修改方式
      const newData = [...data];
      const index = newData.findIndex(item => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const cancel = () => {
    setEditingKey('');
  };
  const edit = record => {
    setEditingKey(record.id);
    form.setFieldsValue({ ...record });
  };

  const add = async () => {
    const row = await form.validateFields();
    // 本地数据添加方式
    const newData = [...data];
    newData.push({
      ...row,
      id: Number(
        Math.random()
          .toString()
          .substr(3, 8) + Date.now(),
      ).toString(36),
    });
    setData(newData);
    setEditingKey('');
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: '25%',
      editable: true,
      rules: [{ required: true, message: '请输入姓名' }],
    },
    {
      title: '身份关系',
      dataIndex: 'identity',
      width: '15%',
      inputNode: (
        <Select>
          <Select.Option value="父亲">父亲</Select.Option>
          <Select.Option value="母亲">母亲</Select.Option>
        </Select>
      ),
      editable: true,
      required: true,
    },
    {
      title: '联系人电话',
      dataIndex: 'phone',
      width: '40%',
      editable: true,
      required: true,
    },
    {
      title: '操作',
      render: (text, record) => {
        const editable = record.id === editingKey;

        if (record.id === 'add-new-row') {
          return editable ? (
            <span>
              <Button type="link" size="small" onClick={() => add()} style={{ marginRight: 8 }}>
                保存
              </Button>
              <Popconfirm title="确定取消吗？" onConfirm={() => cancel()}>
                <Button type="link" size="small">
                  取消
                </Button>
              </Popconfirm>
            </span>
          ) : (
            <>
              <Button
                type="link"
                size="small"
                disabled={editingKey !== ''}
                onClick={() => {
                  setEditingKey(record.id);
                }}
              >
                添加
              </Button>
            </>
          );
        }

        return editable ? (
          <span>
            <Button
              type="link"
              size="small"
              onClick={() => save(record.id)}
              style={{ marginRight: 8 }}
            >
              保存
            </Button>
            <Popconfirm title="确定取消吗？" onConfirm={() => cancel()}>
              <Button type="link" size="small">
                取消
              </Button>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Button
              type="link"
              size="small"
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              编辑
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <EditTable
      formProps={{ form }}
      columns={columns}
      dataSource={data}
      editingKey={editingKey}
      rowKeyName="id"
      scroll={{
        y: 240,
      }}
      style={{
        width: '80%',
        margin: '0 auto',
      }}
    ></EditTable>
  );
};

const originData = [];

originData.unshift({
  id: 'add-new-row',
});
