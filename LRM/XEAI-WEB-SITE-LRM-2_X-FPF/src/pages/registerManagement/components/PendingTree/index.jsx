/**
 * @module 已进场员工信息-树
 */
import { useState } from 'react';
import {
  SearchTree,
  useConstructTree,
  TreeContextMenu,
  Modal,
} from 'lanlinker';
import { Form, Input, Select } from 'antd';

export default () => {
  const [createProjectModal, setCreateProjectModal] = useState(false);
  const [createTeamModal, setCreateTeamModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const treeRawData = [
    {
      id: 1,
      a: '名字1',
      b: '键1',
      c: '图标',
      pId: 0,
    },
    {
      id: 2,
      a: '名字2',
      b: '键2',
      c: '图标',
      pId: 0,
    },
    {
      id: 3,
      a: '名字3333333333333333333333333333333333333333333333',
      b: '键3',
      c: '图标',
      pId: 1,
    },
    {
      id: 7,
      a: '名字4',
      b: '键7',
      c: '图标',
      pId: 1,
    },
    {
      id: 8,
      a: '名字',
      b: '键8',
      c: '图标',
      pId: 1,
    },
    {
      id: 5,
      a: '名字',
      b: '键5',
      c: '图标',
      pId: 2,
    },
    {
      id: 4,
      a: '名字',
      b: '键4',
      c: '图标',
      pId: 3,
    },
    {
      id: 6,
      a: '名字',
      b: '键6',
      c: '图标',
      pId: 3,
    },
    {
      id: 9,
      a: '名字9',
      b: '键9',
      c: '图标',
      pId: 7,
    },
  ];
  const [treeData] = useConstructTree(treeRawData, {
    title: 'a',
    icon: 'c',
  });

  return (
    <>
      <SearchTree
        height={568}
        treeProps={{
          treeData,
          onRightClick({ node }, close) {
            const { a } = node;
            switch (a) {
              case '名字2':
                return (
                  <TreeContextMenu
                    closeOnClick={close}
                    createClick={e => {
                      setCreateProjectModal(true);
                    }}
                    reNameClick={e => {
                      // setReName(true);
                    }}
                    moveClick={e => {
                      // setMove(true);
                    }}
                    removeClick={e => {
                      console.log(e);
                    }}
                    moveUpClick={(e, step) => {
                      console.log(e, step);
                    }}
                    moveDownClick={(e, step) => {
                      console.log(e, step);
                    }}
                  />
                );
              case '名字1':
                return (
                  <TreeContextMenu
                    closeOnClick={close}
                    createClick={e => {
                      setCreateTeamModal(true);
                    }}
                    reNameClick={e => {
                      // setReName(true);
                    }}
                    moveClick={e => {
                      // setMove(true);
                    }}
                    removeClick={e => {
                      console.log(e);
                    }}
                    moveUpClick={(e, step) => {
                      console.log(e, step);
                    }}
                    moveDownClick={(e, step) => {
                      console.log(e, step);
                    }}
                  />
                );
              case '名字4':
                return (
                  <TreeContextMenu
                    closeOnClick={close}
                    createClick={e => {
                      setCreateGroupModal(true);
                    }}
                    reNameClick={e => {
                      // setReName(true);
                    }}
                    moveClick={e => {
                      // setMove(true);
                    }}
                    removeClick={e => {
                      console.log(e);
                    }}
                    moveUpClick={(e, step) => {
                      console.log(e, step);
                    }}
                    moveDownClick={(e, step) => {
                      console.log(e, step);
                    }}
                  />
                );
              default:
                return (
                  <TreeContextMenu
                    closeOnClick={close}
                    reNameClick={e => {
                      // setReName(true);
                    }}
                    moveClick={e => {
                      // setMove(true);
                    }}
                    removeClick={e => {
                      console.log(e);
                    }}
                    moveUpClick={(e, step) => {
                      console.log(e, step);
                    }}
                    moveDownClick={(e, step) => {
                      console.log(e, step);
                    }}
                  />
                );
            }
          },
        }}
      />
      <Modal
        title="新增部门或工程"
        visible={createProjectModal}
        onCancel={() => setCreateProjectModal(false)}
      >
        <Form layout="vertical" initialValues={{ a: '1' }}>
          <Form.Item label="请选择需要新增的部门或队伍">
            <InputWrapper />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="新增队伍"
        visible={createTeamModal}
        onCancel={() => setCreateTeamModal(false)}
      >
        <Form layout="vertical">
          <Form.Item label="请填写新增的队伍">
            <Input placeholder="请输入队伍名称" />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="新增班组"
        visible={createGroupModal}
        onCancel={() => setCreateGroupModal(false)}
      >
        <Form layout="vertical">
          <Form.Item label="请填写新增的组织">
            <Input placeholder="请输入组织名称" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入部门名称',
    '2': '请输入队伍名称',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select onSelect={e => setPlaceHolder(holder[e])}>
            <Select.Option value="1">部门</Select.Option>
            <Select.Option value="2">队伍</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    />
  );
};
