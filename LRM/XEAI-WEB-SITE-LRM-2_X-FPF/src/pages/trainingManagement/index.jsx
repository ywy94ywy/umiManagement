/**
 * @page 培训管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import General from './components/General';
import Detail from './components/Detail';

const TRAINING = ['培训汇总记录', '培训明细记录'];
const TRAINING_LIST = TRAINING.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(TRAINING[0]);

  return (
    <PageHeaderWrapper>
      <Card
        tabList={TRAINING_LIST}
        activeTabKey={tab}
        onTabChange={key => setTab(key)}
      >
        {tab === TRAINING[0] && <General />}
        {tab === TRAINING[1] && <Detail />}
      </Card>
    </PageHeaderWrapper>
  );
};
