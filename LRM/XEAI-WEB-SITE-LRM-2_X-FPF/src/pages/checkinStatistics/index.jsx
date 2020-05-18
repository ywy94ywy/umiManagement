/**
 * @module 项目考勤统计
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Team from './Team';
import Group from './Group';
import Staff from './Staff';

const TAB = ['劳务队伍', '劳务班组', '劳务人员'];
const TAB_LIST = TAB.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(TAB[0]);

  return (
    <PageHeaderWrapper>
      <Card tabList={TAB_LIST} activeTabKey={tab} onTabChange={key => setTab(key)}>
        <Switcher current={tab}></Switcher>
      </Card>
    </PageHeaderWrapper>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case TAB[0]:
      return <Team></Team>;
    case TAB[1]:
      return <Group></Group>;
    case TAB[2]:
      return <Staff></Staff>;
    default:
      return null;
  }
};
