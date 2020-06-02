/**
 * @module 工程考勤统计
 */
import { useState } from 'react';
import { PageHeaderWrapper, useConstructTree } from 'lanlinker';
import { Card, TreeSelect, Form } from 'antd';
import { useModel } from 'umi';
import Team from './components/Team';
import Group from './components/Group';
import Staff from './components/Staff';
import DetailsModal from './components/Modal/details';

const TAB = ['劳务队伍', '劳务班组', '劳务人员'];
const TAB_LIST = TAB.map(v => ({ key: v, tab: v }));

export default () => {
  const [currentTab, setCurrentTab] = useState(TAB[0]);
  const { modalInfo } = useModel('projectAttendance', model => ({
    modalInfo: model.modalInfo,
  }));

  return (
    <PageHeaderWrapper>
      <Card
        tabList={TAB_LIST}
        activeTabKey={currentTab}
        onTabChange={key => setCurrentTab(key)}
        tabBarExtraContent={<OrgTree />}
      >
        {currentTab === TAB[0] && <Team></Team>}
        {currentTab === TAB[1] && <Group></Group>}
        {currentTab === TAB[2] && <Staff></Staff>}
      </Card>
      <DetailsModal visible={modalInfo.visible} />
    </PageHeaderWrapper>
  );
};

// 组织名称选择
const OrgTree = () => {
  const { orgName, setOrgName } = useModel('projectAttendance', model => ({
    orgName: model.orgName,
    setOrgName: model.setOrgName,
  }));
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
      a: '名字3',
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
    key: 'id',
  });

  return (
    <Form style={{ transform: 'translateY(12px)' }}>
      <Form.Item label="组织名称">
        <TreeSelect
          showSearch
          treeData={treeData}
          style={{ width: 150 }}
          treeDefaultExpandAll
          placeholder="请选择"
          value={orgName}
          onSelect={e => setOrgName(e)}
        />
      </Form.Item>
    </Form>
  );
};
