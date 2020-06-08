/**
 * @pages 评价管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Blacklist, Misconduct, Goodconduct } from './components/behavior';

const CARDS = ['黑名单', '不良行为', '良好行为'];
const CARDS_LIST = CARDS.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(CARDS[0]);

  return (
    <PageHeaderWrapper
      tabList={CARDS_LIST}
      tabActiveKey={tab}
      onTabChange={key => setTab(key)}
    >
      {tab === CARDS[0] && <Blacklist />}
      {tab === CARDS[1] && <Misconduct />}
      {tab === CARDS[2] && <Goodconduct />}
    </PageHeaderWrapper>
  );
};
