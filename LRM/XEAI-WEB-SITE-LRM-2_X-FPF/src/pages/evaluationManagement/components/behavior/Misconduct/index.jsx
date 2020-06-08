/**
 * @module 不良行为
 */
import { useState } from 'react';
import { Card } from 'antd';
import All from './All';
import Submitted from './Submitted';
import Current from './Current';
import Pending from './Pending';
import { recordsType } from '../../config';

const TYPE_LIST = recordsType.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(recordsType[0]);

  return (
    <Card
      tabList={TYPE_LIST}
      activeTabKey={tab}
      onTabChange={key => setTab(key)}
    >
      {tab === recordsType[0] && <Submitted />}
      {tab === recordsType[1] && <Current />}
      {tab === recordsType[2] && <All />}
      {tab === recordsType[3] && <Pending />}
    </Card>
  );
};
