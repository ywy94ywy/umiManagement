/**
 * @module 管理人员组
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Button } from 'antd';

export default () => {
  return (
    <Table
      columns={columns}
      actions={{ right: <Button type="primary">excel导出</Button> }}
    ></Table>
  );
};

const columns = [
  {
    title: '序号',
    render(t, r, i) {
      return i;
    },
  },
  {
    title: '部门名称',
    dataIndex: 'a',
  },
  {
    title: '部门负责人',
    dataIndex: 'a',
  },
  {
    title: '员工资料完成数',
    dataIndex: 'a',
  },
  {
    title: '制卡分配完成数',
    dataIndex: 'a',
  },
  {
    title: '安全教育完成数',
    dataIndex: 'a',
  },
  {
    title: '劳动合同完成数',
    dataIndex: 'a',
  },
  {
    title: '资格证书完成数',
    dataIndex: 'a',
  },
  {
    title: '员工体验完成数',
    dataIndex: 'a',
  },
  {
    title: '宿舍分配完成数',
    dataIndex: 'a',
  },
];
