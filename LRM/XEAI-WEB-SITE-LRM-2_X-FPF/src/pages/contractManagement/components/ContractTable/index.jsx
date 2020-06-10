/**
 * @module 合同表格
 */
import { Table } from 'lanlinker';

export default props => {
  return <Table {...props} columns={columns} />;
};

const columns = [
  {
    title: '姓名',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '身份证号',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '岗位',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '合同生效日期',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '合同失效日期',
    dataIndex: 'd',
    ellipsis: true,
  },
];
