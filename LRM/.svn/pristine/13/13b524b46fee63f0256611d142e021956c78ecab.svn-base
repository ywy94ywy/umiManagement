/**
 * @module 通勤违规统计
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Staff from './Staff';
import Series from './Series';

const TAB = ['违规员工信息', '违规流水信息'];
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
      return <Staff></Staff>;
    case TAB[1]:
      return <Series></Series>;
    default:
      return null;
  }
};
