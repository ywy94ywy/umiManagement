/**
 * @module 右侧
 */
import { useState } from 'react';
import { Form, ButtonModal } from 'lanlinker';
import { Tabs, Button, Space, Select } from 'antd';
import participantBase from './forms/participantBase';
import projectBase from './forms/projectBase';
import responsibilityBase from './forms/responsibilityBase';
import supervisorBase from './forms/supervisorBase';
import PictureWall from '../PictureWall';

const { TabPane } = Tabs;

export default () => {
  const [editing, setEditing] = useState(false); // 编辑状态
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const disabled = !editing;

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
      <Space>
        <Button type="primary" onClick={handleCreate} disabled={editing}>
          新增
        </Button>
        <Button type="primary" onClick={handleUpdate} disabled={editing}>
          修改
        </Button>
        {editing && (
          <>
            <Button type="primary" onClick={handleSave}>
              保存
            </Button>
            <Button onClick={handleCancel}>取消</Button>
          </>
        )}
        <ButtonModal
          title="绑定租户执照"
          buttonProps={{
            text: '绑定',
            type: 'primary',
            // onClick: handleUpdate,
          }}
        >
          <Form layout="vertical">
            <Form.Item label="请选择要绑定的租户执照">
              <Select></Select>
            </Form.Item>
          </Form>
        </ButtonModal>
      </Space>
      <Tabs>
        <TabPane tab="工程基本信息" key="工程基本信息">
          <Form
            labelCol={{
              flex: '0 0 130px',
            }}
            configForm={projectBase(disabled)}
            columns={2}
          ></Form>
        </TabPane>
        <TabPane tab="五方责任主体基本信息" key="五方责任主体基本信息">
          <Form
            labelCol={{
              flex: '0 0 130px',
            }}
            style={{ width: 400 }}
            configForm={responsibilityBase(disabled)}
          ></Form>
        </TabPane>
        <TabPane tab="参建各方基本信息" key="参建各方基本信息">
          <Form
            labelCol={{
              flex: '0 0 130px',
            }}
            style={{ width: 400 }}
            configForm={participantBase(disabled)}
          ></Form>
        </TabPane>
        <TabPane tab="工程监管方信息" key="工程监管方信息">
          <Form
            labelCol={{
              flex: '0 0 130px',
            }}
            style={{ width: 400 }}
            configForm={supervisorBase(disabled)}
          ></Form>
        </TabPane>
        <TabPane tab="工程资料附件" key="工程资料附件">
          <PictureWall
            fileList={fileList}
            setFileList={setFileList}
            disabled={disabled}
          ></PictureWall>
        </TabPane>
      </Tabs>
    </>
  );
};
