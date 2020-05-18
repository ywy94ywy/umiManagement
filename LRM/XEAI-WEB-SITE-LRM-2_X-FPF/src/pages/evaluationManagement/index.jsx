/**
 * @module 评价管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Blacklist, Misconduct, Goodconduct } from './components/TabCards';

const CARDS = ['黑名单', '不良行为', '良好行为'];
const CARDS_LIST = CARDS.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(CARDS[0]);

  return (
    <PageHeaderWrapper tabList={CARDS_LIST} tabActiveKey={tab} onTabChange={key => setTab(key)}>
      <Switcher current={tab}></Switcher>
    </PageHeaderWrapper>
  );
};
const Switcher = ({ current }) => {
  switch (current) {
    case CARDS[0]:
      return <Blacklist></Blacklist>;
    case CARDS[1]:
      return <Misconduct></Misconduct>;
    case CARDS[2]:
      return <Goodconduct></Goodconduct>;
    default:
      return null;
  }
};
