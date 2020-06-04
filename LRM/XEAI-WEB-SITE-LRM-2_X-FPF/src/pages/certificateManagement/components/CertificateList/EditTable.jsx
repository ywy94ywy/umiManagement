import { Table } from 'lanlinker';

export default () => {
  return <Table columns={columns}></Table>;
};

const columns = [
  {
    title: '证书编号',
    dataIndex: 'a',
  },
  {
    title: '有效日期',
    dataIndex: 'a',
  },
  {
    title: '失效日期',
    dataIndex: 'a',
  },
  {
    title: '操作',
    render() {},
  },
];
