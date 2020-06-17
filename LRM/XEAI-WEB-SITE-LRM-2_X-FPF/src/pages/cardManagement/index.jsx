/**
 * @page 卡片管理
 * @todo 人脸识别拍照
 * @todo 组件必选验证
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Staff from './components/Staff';
import Temp from './components/Temp';
import RecordsQuery from './components/RecordsQuery';

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
        {tab === CARDS[0] && <Staff />}
        {tab === CARDS[1] && <Temp />}
        {tab === CARDS[2] && <RecordsQuery />}
      </Card>
    </PageHeaderWrapper>
  );
};
