/**
 * @module 不良行为
 */
import React, { useState } from 'react';
import { Card, Button } from 'antd';
import Submitted from './Submitted';
import Current from './Current';
import All from './All';
import Pending from './Pending';

const TYPE = ['已提交评价记录', '本级组织评价记录', '全部评价记录', '待审批评价记录'];
const TYPE_LIST = TYPE.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(TYPE[0]);

  return (
    <Card
      tabList={TYPE_LIST}
      activeTabKey={tab}
      onTabChange={key => setTab(key)}
      tabBarExtraContent={
        <Button.Group>
          <Button>涉事组织</Button>
          <Button>涉事员工</Button>
        </Button.Group>
      }
    >
      <Switcher current={tab}></Switcher>
    </Card>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case TYPE[0]:
      return <Submitted></Submitted>;
    case TYPE[1]:
      return <Current></Current>;
    case TYPE[2]:
      return <All></All>;
    case TYPE[3]:
      return <Pending></Pending>;
    default:
      return null;
  }
};
