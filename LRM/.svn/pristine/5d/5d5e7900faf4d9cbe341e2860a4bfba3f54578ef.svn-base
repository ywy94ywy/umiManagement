/**
 * @module 卡片授权授权
 */
import React, { useState } from 'react';
import { Card, Input, Button } from 'antd';
import All from './All';
import Formal from './Formal';
import Temp from './Temp';

const TYPE = ['全部卡片', '正式卡', '临时卡'];
const TYPE_LIST = TYPE.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(TYPE[0]);

  return (
    <Card
      tabList={TYPE_LIST}
      activeTabKey={tab}
      onTabChange={key => setTab(key)}
      tabBarExtraContent={
        <div
          style={{
            display: 'flex',
            marginTop: '12px',
          }}
        >
          <Input placeholder="请输入姓名或身份证号"></Input>
          <Button type="primary" style={{ marginLeft: 8 }}>
            查询
          </Button>
        </div>
      }
    >
      <Switcher current={tab}></Switcher>
    </Card>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case TYPE[0]:
      return <All></All>;
    case TYPE[1]:
      return <Formal></Formal>;
    case TYPE[2]:
      return <Temp></Temp>;
    default:
      return null;
  }
};
