import { Card } from 'antd';
import { Table } from 'lanlinker';

const UserActivity = ({ data }) => (
  <Card title="各系统用户量">
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 8,
      }}
    />
  </Card>
);

export default UserActivity;

const columns = [
  {
    title: '排名',
    dataIndex: 'index',
    width: 50,
    ellipsis: true,
  },
  {
    title: '系统名称',
    dataIndex: 'keyword',
    width: 130,
    ellipsis: true,
    render: text => <a href="/">{text}</a>,
  },
  {
    title: '总用户数',
    dataIndex: 'count',
    width: 90,
    ellipsis: true,
  },
  {
    title: 'DAU',
    dataIndex: 'a',
    width: 70,
    ellipsis: true,
  },
];
