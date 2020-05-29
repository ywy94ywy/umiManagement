/**
 * @module 用户执照管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Collapse } from 'antd';
import SystemCard from '@/components/SystemCard';
import classNames from 'classnames';
import styles from './style.less';
import appliedLogo from './imgs/applied.png'; // todo logo映射

const LICENSE_TYPE_LIST = ['全部', '已申请系统', '未申请系统'];

const all = LICENSE_TYPE_LIST[0];
const everyType = LICENSE_TYPE_LIST.slice(1);
const applied = LICENSE_TYPE_LIST[1];
const unApplied = LICENSE_TYPE_LIST[2];

export default () => {
  const [currentType, setCurrentType] = useState(all); // 当前所属类目
  const [activeKey, setActiveKey] = useState(everyType); // 折叠面板展开状态

  return (
    <PageHeaderWrapper className={styles.userLicense}>
      <Card>
        <span className={styles.title}>所属类目：</span>
        {LICENSE_TYPE_LIST.map((v, i) => (
          <span
            key={i}
            className={classNames(styles.item, v === currentType && styles.active)}
            onClick={() => {
              if (v === all) {
                setActiveKey(everyType);
              } else {
                setActiveKey(v);
              }
              setCurrentType(v);
            }}
          >
            {v}
          </span>
        ))}
      </Card>
      <Collapse activeKey={activeKey} onChange={e => setActiveKey(e)}>
        {[all, applied].includes(currentType) && (
          <Collapse.Panel header={applied} key={applied}>
            <div className={styles.panel}>
              {ASystems.map((v, i) => (
                <SystemCard data={v} type="applied" key={i}></SystemCard>
              ))}
            </div>
          </Collapse.Panel>
        )}
        {[all, unApplied].includes(currentType) && (
          <Collapse.Panel header={unApplied} key={unApplied}>
            <div className={styles.panel}>
              {BSystems.map((v, i) => (
                <SystemCard data={v} type="unApplied" key={i} projectList={list}></SystemCard>
              ))}
            </div>
          </Collapse.Panel>
        )}
      </Collapse>
    </PageHeaderWrapper>
  );
};

const list = [
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
  {
    title: 'test',
  },
];
const ASystems = [
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    subtitle: '劳务实名制管理系统_江苏南通二建集团公司劳务实名制管理系统_江苏南通二建集团公司',
    description: '88888888',
    icon: appliedLogo,
    number: 1577,
    star: '2020-01-01 14:00:00',
    end: '2020-03-01  14:00:00',
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    subtitle: '劳务实名制管理系统_江苏南通二建集团公司',
    description: '88888888',
    icon: appliedLogo,
    number: 1577,
    star: '2020-01-01 14:00:00',
    end: '2020-03-01  14:00:00',
  },
];

const BSystems = [
  {
    title: '劳务实名制管理系统_2013-84号地块一期（A3-02）工程',
    description: '88888888',
    icon: appliedLogo,
  },
  {
    title: '劳务实名制管理系统_首创国际项目',
    description: '88888888',
    icon: appliedLogo,
  },
  {
    title: '劳务实名制管理系统_2013-84号地块一期（A3-02）工程',
    description: '88888888',
    icon: appliedLogo,
  },
  {
    title: '劳务实名制管理系统_首创国际项目',
    description: '88888888',
    icon: appliedLogo,
  },
];
