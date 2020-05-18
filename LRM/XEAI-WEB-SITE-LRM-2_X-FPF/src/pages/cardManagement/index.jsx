import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import {
  Staff,
  Temp,
  Gate,
  AuthQuery,
  RecordsQuery,
} from './components/TabCards';
import { Select } from 'antd';

const CARDS = [
  '员工卡片授权',
  '临时卡片授权',
  '卡片门区授权',
  '卡片授权查询',
  '卡片记录查询',
];
const CARDS_LIST = CARDS.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(CARDS[0]);

  return (
    <PageHeaderWrapper
      tabList={CARDS_LIST}
      tabActiveKey={tab}
      onTabChange={key => setTab(key)}
      extra={
        <>
          <span>组织名称：</span>
          <Select></Select>
        </>
      }
    >
      <Switcher current={tab}></Switcher>
    </PageHeaderWrapper>
  );
};
const Switcher = ({ current }) => {
  switch (current) {
    case CARDS[0]:
      return <Staff></Staff>;
    case CARDS[1]:
      return <Temp></Temp>;
    case CARDS[2]:
      return <Gate></Gate>;
    case CARDS[3]:
      return <AuthQuery></AuthQuery>;
    case CARDS[4]:
      return <RecordsQuery></RecordsQuery>;
    default:
      return null;
  }
};
