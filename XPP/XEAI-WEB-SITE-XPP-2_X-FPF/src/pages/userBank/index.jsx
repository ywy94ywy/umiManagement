/**
 * @module 用户银行信息管理
 */
import React from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import BankCardList from './components/BankCardList';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        <BankCardList data={data}></BankCardList>
      </Card>
    </PageHeaderWrapper>
  );
};

const data = [
  {
    title: '中国农业银行',
    type: '储蓄卡',
    number: 6546513214654654654,
    first: true,
  },
  {
    title: '中国工商银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
  {
    title: '中国建设银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
  {
    title: '招商银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
  {
    title: '中国银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
  {
    title: '中国邮政储蓄银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
  {
    title: '交通银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
  {
    title: '未知银行',
    type: '储蓄卡',
    number: 6546513214654654654,
  },
];
