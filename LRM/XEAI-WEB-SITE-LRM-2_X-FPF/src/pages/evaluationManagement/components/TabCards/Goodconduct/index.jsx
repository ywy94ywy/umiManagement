/**
 * @module 良好行为
 */
import React, { useState } from 'react';
import { Card, Button } from 'antd';
import Current from './Current';
import All from './All';

const TYPE = ['本级组织评价记录', '全部评价记录'];
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
      return <Current></Current>;
    case TYPE[1]:
      return <All></All>;
    default:
      return null;
  }
};
