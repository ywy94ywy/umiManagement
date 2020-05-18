import React, { useState } from 'react';
import {  Select, Card, Input, Button,  Layout } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import { Signed, UnSigned, Due } from './components/Contracts';
import styles from './style.less';

const CONTRACTS = ['未签劳动合同', '已签劳动合同', '即将到期劳动合同'];
const CONTRACTS_LIST = CONTRACTS.map(v => ({ key: v, tab: v }));

export default () => {
  const [tab, setTab] = useState(CONTRACTS[0]);

  return (
    <PageHeaderWrapper
      extra={
        <>
          <span>组织名称：</span>
          <Select></Select>
        </>
      }
      className={styles.contractManagement}
    >
      <Card
        tabList={CONTRACTS_LIST}
        activeTabKey={tab}
        onTabChange={key => setTab(key)}
        tabBarExtraContent={
          <div style={{ height: '54px', display: 'flex', alignItems: 'center' }}>
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
    case CONTRACTS[0]:
      return <Signed></Signed>;
    case CONTRACTS[1]:
      return <UnSigned></UnSigned>;
    case CONTRACTS[2]:
      return <Due></Due>;
    default:
      return null;
  }
};
