/**
 * @module 用户执照管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Collapse, Select } from 'antd';
import SystemCard from '@/components/SystemCard';
import classNames from 'classnames';
import styles from './style.less';
import applied from './imgs/applied.png';

const licenseType = ['全部', '已申请系统', '未申请系统'];

export default () => {
  const [currentType, setCurrentType] = useState('全部');
  const [activeKey, setActiveKey] = useState(licenseType.slice(1));

  const applied = licenseType[1];
  const unApplied = licenseType[2];

  return (
    <PageHeaderWrapper>
      <div className={styles.userLicense}>
        <Card>
          <header className={styles.head}>
            <div>
              <span className={styles.title}>所属类目：</span>
              {licenseType.map((v, i) => (
                <span
                  key={i}
                  className={classNames(styles.item, v === currentType && styles.active)}
                  onClick={() => {
                    if (v === '全部') {
                      setActiveKey(licenseType.slice(1));
                    } else {
                      setActiveKey(v);
                    }
                    setCurrentType(v);
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </header>
        </Card>
        <Collapse
          activeKey={activeKey}
          onChange={e => {
            setActiveKey(e);
          }}
        >
          {(currentType === licenseType[0] || currentType === applied) && (
            <Collapse.Panel header={applied} key={applied}>
              <div className={styles.panel}>
                {ASystems.map((v, i) => (
                  <SystemCard data={v} key={i} org details></SystemCard>
                ))}
              </div>
            </Collapse.Panel>
          )}
          {(currentType === licenseType[0] || currentType === unApplied) && (
            <Collapse.Panel
              header={<span className={styles.fix}>{unApplied}</span>}
              key={unApplied}
            >
              <div className={styles.panel}>
                {BSystems.map((v, i) => (
                  <SystemCard data={v} type="grey" key={i} org details></SystemCard>
                ))}
              </div>
            </Collapse.Panel>
          )}
        </Collapse>
      </div>
    </PageHeaderWrapper>
  );
};

const ASystems = [
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    description: '88888888',
    icon: applied,
    number: 1577,
    star: '2020-01-01 14:00:00',
    end: '2020-03-01  14:00:00',
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    description: '88888888',
    icon: applied,
    number: 1577,
    star: '2020-01-01 14:00:00',
    end: '2020-03-01  14:00:00',
  },
];

const BSystems = [
  {
    title: '劳务实名制管理系统_2013-84号地块一期（A3-02）工程',
    description: '88888888',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_首创国际项目',
    description: '88888888',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_2013-84号地块一期（A3-02）工程',
    description: '88888888',
    icon: applied,
  },
  {
    title: '劳务实名制管理系统_首创国际项目',
    description: '88888888',
    icon: applied,
  },
];
