/**
 * title: 可添加行表格
 */
import React, { useState } from 'react';
import { EditTable } from 'lanlinker';
import { Button, Popconfirm, Form, Select } from 'antd';

export default () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const [data, setData] = useState(originData);

  const save = async (id: string) => {
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
  const edit = (record: any) => {
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
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
      rules: [{ required: true, message: '请输入姓名' }],
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      required: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      inputNode: (
        <Select>
          <Select.Option value="a">a</Select.Option>
          <Select.Option value="b">b</Select.Option>
          <Select.Option value="c">c</Select.Option>
        </Select>
      ),
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text: any, record: any) => {
        const editable = record.id === editingKey;

        if (record.id === 'add-new-row') {
          return editable ? (
            <span>
              <Button
                type="link"
                size="small"
                onClick={() => add()}
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
    ></EditTable>
  );
};

const originData: any[] = [];

originData.unshift({
  id: 'add-new-row',
});
