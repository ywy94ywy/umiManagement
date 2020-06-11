import { Table } from 'lanlinker';

export default props => {
  return <Table {...props} columns={columns} />;
};

const columns = [
  {
    title: '卡号',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '持卡人姓名',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '启用时间',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '失效时间',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '备注',
    dataIndex: 'a',
    ellipsis: true,
  },
];
