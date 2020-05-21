/**
 * @module 组织与项目详细信息
 */

import { useState, useEffect } from 'react';
import { Form } from 'lanlinker';
import { Button, Space } from 'antd';
import { useRequest } from 'umi';
import project from './forms/project';
import { fetchProject } from '../../services';

export default ({ node, readOnly = false }) => {
  const [editing, setEditing] = useState(false); // 编辑状态
  const [projectForm] = Form.useForm(); // 编辑状态
  const { first, id } = node;
  const { run } = useRequest(fetchProject(id), {
    manual: true,
    onSuccess(data) {
      projectForm.setFieldsValue(data);
    },
  });
  const disabled = readOnly ? true : !editing;

  useEffect(() => {
    if (first) {
      projectForm.resetFields();
    }
    if (!first && id) {
      run();
    }
  }, [first, id]);

  const handleCreate = () => {
    setEditing(true);
  };
  const handleUpdate = () => {
    setEditing(true);
  };
  const handleSave = () => {
    setEditing(false);
  };
  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <>
      {!readOnly && (
        <Space style={{ marginTop: 16 }}>
          {!editing && (
            <>
              {first && (
                <Button
                  type="primary"
                  onClick={handleCreate}
                  disabled={editing}
                >
                  新增
                </Button>
              )}
              {!first && (
                <Button
                  type="primary"
                  onClick={handleUpdate}
                  disabled={editing}
                >
                  修改
                </Button>
              )}
            </>
          )}
          {editing && (
            <>
              <Button type="primary" onClick={handleSave}>
                保存
              </Button>
              <Button onClick={handleCancel}>取消</Button>
            </>
          )}
        </Space>
      )}
      <Form
        form={projectForm}
        style={{ width: 600, marginTop: 20 }}
        labelCol={{
          flex: '0 0 200px',
        }}
        configForm={project(disabled)}
      ></Form>
    </>
  );
};
