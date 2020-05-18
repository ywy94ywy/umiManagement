import React from 'react';
import { Table } from 'lanlinker';
import LaborLayout from '@/components/LaborLayout';
import ListItemWrapper from '@/components/ListItemWrapper';

export default ({ dataSource }) => {
  return (
    <LaborLayout
      content={<Table columns={columns} dataSource={dataSource}></Table>}
      sider={<ListItemWrapper title="授权方式"></ListItemWrapper>}
    />
  );
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
    width: 120,
  },
  {
    title: '性别',
    dataIndex: 'b',
    width: 90,
  },
  {
    title: '身份证号',
    dataIndex: 'd',
  },
  {
    title: '岗位',
    dataIndex: 'e',
  },
];
