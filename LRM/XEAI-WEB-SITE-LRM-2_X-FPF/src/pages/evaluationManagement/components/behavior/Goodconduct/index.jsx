/**
 * @module 良好行为
 */
import { useState } from 'react';
import { Card } from 'antd';
import All from './All';
import Current from './Current';
import { recordsType } from '../../config';

const TYPE_LIST = recordsType.slice(1, 3).map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(recordsType[1]);

  return (
    <Card
      tabList={TYPE_LIST}
      activeTabKey={tab}
      onTabChange={key => setTab(key)}
    >
      {tab === recordsType[1] && <Current />}
      {tab === recordsType[2] && <All />}
    </Card>
  );
};
