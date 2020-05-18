/**
 * @module 资料登记统计
 */
import React, { useState } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import { Select } from 'antd';
import All from './components/All';
import Managers from './components/Managers';
import Labor from './components/Labor';
import Professional from './components/Professional';
import Incomplete from './components/Incomplete';
import { LargePie, BasePie, SinglePie } from './components/Pie';

import styles from './style.less';

const GROUPS = [
  '全部',
  '管理人员组',
  '劳务分包组',
  '专业分包组',
  '资料未完成员工组',
];
const GROUPS_LIST = GROUPS.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(GROUPS[0]);

  return (
    <PageHeaderWrapper
      className={styles.registerStatistics}
      extra={
        <>
          <span>组织名称：</span>
          <Select></Select>
        </>
      }
    >
      <Card>
        <section className={styles.pieCharts}>
          <aside>
            <LargePie
              data={[
                { name: '资料总完成人数', value: 850 },
                { name: '资料未完成人数', value: 110 },
              ]}
            ></LargePie>
          </aside>
          <article>
            <section>
              <BasePie
                data={[
                  { name: '管理人员', value: 10 },
                  { name: '劳务人员', value: 90 },
                ]}
              ></BasePie>
            </section>
            <section>
              <BasePie
                data={[
                  { name: '男', value: 10 },
                  { name: '女', value: 90 },
                ]}
              ></BasePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '人员基本信息完整率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '工资卡完成率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '制卡分配完成率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '劳动合同完成率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '安全培训完成率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '员工体检完成率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '资格证书拥有率', value: '25%' }}
              ></SinglePie>
            </section>
            <section>
              <SinglePie
                data={{ name: '宿舍分配完成率', value: '25%' }}
              ></SinglePie>
            </section>
          </article>
        </section>
      </Card>
      <Card
        tabList={GROUPS_LIST}
        activeTabKey={tab}
        onTabChange={key => setTab(key)}
        marginTop
      >
        <Switcher current={tab}></Switcher>
      </Card>
    </PageHeaderWrapper>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case GROUPS[0]:
      return <All></All>;
    case GROUPS[1]:
      return <Managers></Managers>;
    case GROUPS[2]:
      return <Labor></Labor>;
    case GROUPS[3]:
      return <Professional></Professional>;
    case GROUPS[4]:
      return <Incomplete></Incomplete>;
    default:
      return null;
  }
};
