/**
 * @page 卡片管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import { Staff, Temp, RecordsQuery } from './components/TabCards';

const CARDS = ['员工卡片授权', '临时卡片授权', '卡片记录查询'];
const CARDS_LIST = CARDS.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(CARDS[0]);

  return (
    <PageHeaderWrapper
      tabList={CARDS_LIST}
      tabActiveKey={tab}
      onTabChange={key => setTab(key)}
    >
      <Card>
        {tab === CARDS[0] && null}
        {tab === CARDS[1] && null}
        {tab === CARDS[2] && <RecordsQuery />}
      </Card>
    </PageHeaderWrapper>
  );
};
