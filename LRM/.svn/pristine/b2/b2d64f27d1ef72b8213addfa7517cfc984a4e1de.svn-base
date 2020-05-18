/**
 * @module 员工卡片授权
 */
import React, { useState } from 'react';
import { Card, Input, Button } from 'antd';
import Unauthorized from './Unauthorized';
import Authorized from './Authorized';
import All from './All';

const TYPE = ['未授权', '已授权', '全部人员'];
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
      return <Unauthorized></Unauthorized>;
    case TYPE[1]:
      return <Authorized></Authorized>;
    case TYPE[2]:
      return <All></All>;
    default:
      return null;
  }
};
