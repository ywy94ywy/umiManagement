/**
 * @module 体检管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Input, Button, Select } from 'antd';
import All from './All';
import Checked from './Checked';
import Unchecked from './Unchecked';

const TYPE = ['全部人员', '已体检人员', '未体检人员'];
const TYPE_LIST = TYPE.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(TYPE[0]);

  return (
    <PageHeaderWrapper
      extra={
        <>
          <span>组织名称:</span>
          <Select></Select>
        </>
      }
    >
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
    </PageHeaderWrapper>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case TYPE[0]:
      return <All></All>;
    case TYPE[1]:
      return <Checked></Checked>;
    case TYPE[2]:
      return <Unchecked></Unchecked>;
    default:
      return null;
  }
};
