/**
 * @module 左侧
 */
import { useState } from 'react';
import { Tabs, Input } from 'antd';
import { SearchTree, Modal } from 'lanlinker';

const { TabPane } = Tabs;

export default ({ treeData }) => {
  const [project, setProject] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [reName, setReName] = useState(false);
  const [move, setMove] = useState(false);

  return (
    <>
      <Tabs>
        <TabPane tab="承建工程标签" key="承建工程标签">
          <SearchTree
            height={400}
            treeProps={{
              treeData,
              onRightClick(a) {
                return (
                  <ContextMenu>
                    <ContextMenu.Item
                      onClick={() => {
                        setProject(true);
                      }}
                    >
                      <span>新增</span>
                    </ContextMenu.Item>
                    <ContextMenu.Item
                      onClick={() => {
                        setReName(true);
                      }}
                    >
                      重命名
                    </ContextMenu.Item>
                    <ContextMenu.Item
                      onClick={() => {
                        setMove(true);
                      }}
                    >
                      移动
                    </ContextMenu.Item>
                    <ContextMenu.Item>删除</ContextMenu.Item>
                    <ContextMenu.Item>
                      排序上移&nbsp;
                      <Input
                        style={{ maxWidth: 30, padding: '0 5px' }}
                        maxLength={2}
                      />
                      &nbsp;步
                    </ContextMenu.Item>
                    <ContextMenu.Item>
                      排序下移&nbsp;
                      <Input
                        style={{ maxWidth: 30, padding: '0 5px' }}
                        maxLength={2}
                      />
                      &nbsp;步
                    </ContextMenu.Item>
                  </ContextMenu>
                );
              },
            }}
          ></SearchTree>
        </TabPane>
        <TabPane tab="监管工程标签" key="监管工程标签">
          <SearchTree
            height={400}
            treeProps={{
              treeData,
              onRightClick(a) {
                return (
                  <ContextMenu style={{ width: 100 }}>
                    <ContextMenu.Item>新增</ContextMenu.Item>
                    <ContextMenu.Item>重命名</ContextMenu.Item>
                    <ContextMenu.Item>移动</ContextMenu.Item>
                    <ContextMenu.Item>删除</ContextMenu.Item>
                    <ContextMenu.Item>排序上移</ContextMenu.Item>
                    <ContextMenu.Item>排序下移</ContextMenu.Item>
                  </ContextMenu>
                );
              },
            }}
          ></SearchTree>
        </TabPane>
      </Tabs>
      <Modal
        visible={project}
        onCancel={() => {
          setProject(false);
        }}
      >
        新增1
      </Modal>
      <Modal
        visible={engineering}
        onCancel={() => {
          setEngineering(false);
        }}
      >
        新增2
      </Modal>
      <Modal
        visible={reName}
        onCancel={() => {
          setReName(false);
        }}
      >
        重命名
      </Modal>
      <Modal
        visible={move}
        onCancel={() => {
          setMove(false);
        }}
      >
        移动
      </Modal>
    </>
  );
};

const ContextMenu = ({ children, ...props }) => {
  return (
    <ul
      className="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical"
      {...props}
    >
      {children}
    </ul>
  );
};

ContextMenu.Item = ({ children, ...props }) => {
  return (
    <li
      className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
      {...props}
    >
      {children}
    </li>
  );
};
