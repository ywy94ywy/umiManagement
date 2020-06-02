/**
 * @module 劳务人员表格
 */
import { Table } from 'lanlinker';

export default ({ dataSource, ...props }) => {
  const dayList = new Array(31).fill(1).map((v, i) => {
    const day = (i + 1 + '').padStart(2, '0') + '日';
    return { title: day, dataIndex: i };
  });

  const staffColumns = [
    {
      title: '序号',
      render(t, r, i) {
        return i;
      },
    },
    {
      title: '姓名',
      dataIndex: 'a',
    },
    {
      title: '身份证号',
      dataIndex: 'b',
    },
    {
      title: '出勤率',
      dataIndex: 'c',
    },
    {
      title: '日平均值',
      dataIndex: 'd',
    },
    {
      title: '小计值',
      dataIndex: 'e',
    },
    ...dayList,
  ];

  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={staffColumns}
      scroll={{
        x: 3000,
      }}
      {...props}
    ></Table>
  );
};
