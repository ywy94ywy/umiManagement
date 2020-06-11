/**
 * @module 待进场员工信息-树
 */
import { SearchTree, useConstructTree, TreeContextMenu } from 'lanlinker';
import { Tabs } from 'antd';

export default () => {
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
    <Tabs>
      <Tabs.TabPane tab="公司成员" key="公司成员">
        <SearchTree
          height={568}
          treeProps={{
            treeData,
            onRightClick(_, close) {
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
            },
          }}
        />
      </Tabs.TabPane>
      <Tabs.TabPane tab="合作成员" key="合作成员">
        <SearchTree
          height={568}
          treeProps={{
            treeData,
            onRightClick(_, close) {
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
            },
          }}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};
