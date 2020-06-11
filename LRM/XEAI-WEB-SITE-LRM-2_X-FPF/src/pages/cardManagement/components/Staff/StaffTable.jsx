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
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '性别',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '岗位',
    dataIndex: 'a',
    ellipsis: true,
  },
];
