/**
 * @module 组织组别管理树
 */
import { useState } from 'react';
import {
  SearchTree,
  TreeContextMenu,
  useConstructTree,
  Modal,
} from 'lanlinker';
import { useRequest } from 'umi';
import { Form, Input, Select, Skeleton } from 'antd';
import { fetchTree } from '../../services';

export default ({ tabKey, detailKeyList, setDetailType }) => {
  const [project, setProject] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [reName, setReName] = useState(false);
  const [move, setMove] = useState(false);
  const [createType, setCreateType] = useState('1');
  const [porjectForm] = Form.useForm();

  const { data } = useRequest(fetchTree(tabKey));

  const [treeData] = useConstructTree(data, {
    title: 'a',
    icon: 'c',
    key: 'id',
  });

  if (!data) {
    return <Skeleton active />;
  }

  return (
    <>
      <SearchTree
        height={400}
        treeProps={{
          treeData,
          onClick(e, treeNode) {
            const { title, first, id } = treeNode;
            if (title.includes('公司') || title.includes('组织')) {
              // 项目与组织详情
              setDetailType({
                type: [tabKey, detailKeyList[0]],
                node: {
                  first,
                  id,
                },
              });
            } else if (title.includes('工程')) {
              // 工程详情
              setDetailType({
                type: [tabKey, detailKeyList[1]],
                node: {
                  first,
                  id,
                },
              });
            }
          },
          onRightClick({ event, node }, close) {
            const { title } = node;
            if (title.includes('公司')) {
              // 公司菜单
              return (
                <TreeContextMenu
                  closeOnClick={close}
                  createClick={e => {
                    setProject(true);
                  }}
                  reNameClick={e => {
                    setReName(true);
                  }}
                  moveClick={e => {
                    setMove(true);
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
            } else if (title.includes('组织')) {
              // 项目菜单
              return (
                <TreeContextMenu
                  closeOnClick={close}
                  createClick={e => {
                    setEngineering(true);
                  }}
                  reNameClick={e => {
                    setReName(true);
                  }}
                  moveClick={e => {
                    setMove(true);
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
            } else if (title.includes('工程')) {
              // 工程菜单
              return (
                <TreeContextMenu
                  closeOnClick={close}
                  reNameClick={e => {
                    setReName(true);
                  }}
                  moveClick={e => {
                    setMove(true);
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
      ></SearchTree>
      <Modal
        width={400}
        title="新增"
        visible={project}
        onOk={() => {
          setProject(false);
        }}
        onCancel={() => {
          setProject(false);
        }}
      >
        <Form
          form={porjectForm}
          layout="vertical"
          initialValues={{ type: '1' }}
        >
          <Form.Item name="org" label="请选择需要新增的组织或项目">
            <Input
              addonBefore={
                <Form.Item name="type" noStyle>
                  <Select
                    style={{ width: 70 }}
                    onSelect={value => {
                      setCreateType(value);
                      porjectForm.resetFields(['org']);
                    }}
                  >
                    <Select.Option value="1">组织</Select.Option>
                    <Select.Option value="2">项目</Select.Option>
                  </Select>
                </Form.Item>
              }
              placeholder={
                createType === '1' ? '请输入组织名称' : '请输入项目名称'
              }
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        width={400}
        title="新增"
        visible={engineering}
        onOk={() => {
          setEngineering(false);
        }}
        onCancel={() => {
          setEngineering(false);
        }}
      >
        <Form layout="vertical">
          <Form.Item label="请输入新增的工程名称">
            <Input placeholder="请输入工程名称"></Input>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        width={400}
        visible={reName}
        onOk={() => {
          setReName(false);
        }}
        onCancel={() => {
          setReName(false);
        }}
      >
        重命名
      </Modal>
      <Modal
        width={400}
        visible={move}
        onOk={() => {
          setMove(false);
        }}
        onCancel={() => {
          setMove(false);
        }}
      >
        移动
      </Modal>
    </>
  );
};
