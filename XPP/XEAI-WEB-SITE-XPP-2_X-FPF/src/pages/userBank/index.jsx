/**
 * @module 用户银行信息管理
 * @todo 卡号脱敏以及数字化
 */
import React from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import BankCardList from './components/BankCardList';
import { useRequest } from 'umi';
import { fetchBankCards } from './servers';

export default () => {
  const { data, loading } = useRequest(fetchBankCards);

  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        <BankCardList data={data} loading={loading}></BankCardList>
      </Card>
    </PageHeaderWrapper>
  );
};
