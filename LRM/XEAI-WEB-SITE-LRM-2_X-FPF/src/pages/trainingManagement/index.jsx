/**
 * @module 培训管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Summary from './Summary';
import Details from './Details';

const TAB = ['培训汇总记录', '培训明细记录'];
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
      return <Summary></Summary>;
    case TAB[1]:
      return <Details></Details>;
    default:
      return null;
  }
};
