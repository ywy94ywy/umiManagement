import React, { useState } from 'react';
import { PageHeaderWrapper, Card, Table } from 'lanlinker';

import Month from './Month';
import Year from './Year';

const DIMENSION = ['月度', '年度'];
const DIMENSION_LIST = DIMENSION.map(v => ({ key: v, tab: v }));

export default () => {
  const [dimension, setDimension] = useState(DIMENSION[0]);

  return (
    <PageHeaderWrapper>
      <Card
        tabList={DIMENSION_LIST}
        activeTabKey={dimension}
        onTabChange={key => setDimension(key)}
      >
        <Switcher current={dimension}></Switcher>
      </Card>
      <Card marginTop>
        <Table
          actions={{
            right: <strong>单位：人</strong>,
          }}
          dataSource={dataSource}
          columns={columns}
          rowKey={(v, i) => i}
        />
      </Card>
    </PageHeaderWrapper>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case DIMENSION[0]:
      return <Month></Month>;
    case DIMENSION[1]:
      return <Year></Year>;
    default:
      return null;
  }
};
const dataSource = [];

const columns = [
  {
    title: '序号',
    render: (t, r, i) => i + 1,
    key: 'index',
  },
  {
    title: '月度',
    dataIndex: '月度',
  },
  {
    title: '区间进场',
    dataIndex: '区间进场',
  },
  {
    title: '区间退场',
    dataIndex: '区间退场',
  },
  {
    title: '累计进场',
    dataIndex: '累计进场',
  },
  {
    title: '累计退场',
    dataIndex: '累计退场',
  },
  {
    title: '区间在职',
    dataIndex: '区间在职',
  },
  {
    title: '区间在册',
    dataIndex: '区间在册',
  },
  {
    title: '员工流动性率',
    dataIndex: '员工流动性率',
  },
  {
    title: '员工出勤率',
    dataIndex: '员工出勤率',
  },
];

for (let index = 1; index < 10; index++) {
  dataSource.push({
    '月度': '2019年12月30日',
    '区间进场': '200',
    '区间退场': '300',
    '累计进场': '300',
    '累计退场': '300',
    '区间在职': '300',
    '区间在册': '300',
    '员工流动性率': '30%',
    '员工出勤率': '30%',
  });
}
