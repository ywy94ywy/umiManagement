/**
 * @page 工资管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Detail from './components/Detail';
import General from './components/General';

const SALARY = ['工资汇总记录', '工资明细记录'];
const SALARY_LIST = SALARY.map(v => ({ tab: v, key: v }));

export default () => {
  const [tab, setTab] = useState(SALARY[0]);

  return (
    <PageHeaderWrapper>
      <Card
        tabList={SALARY_LIST}
        activeTabKey={tab}
        onTabChange={key => setTab(key)}
      >
        {tab === SALARY[0] && <General />}
        {tab === SALARY[1] && <Detail />}
      </Card>
    </PageHeaderWrapper>
  );
};
