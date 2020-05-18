/**
 * @module 项目岗位统计
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Managers from './Managers';
import Labors from './Labors';

const TAB = ['管理人员', '劳务工人'];
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
      return <Managers></Managers>;
    case TAB[1]:
      return <Labors></Labors>;
    default:
      return null;
  }
};
