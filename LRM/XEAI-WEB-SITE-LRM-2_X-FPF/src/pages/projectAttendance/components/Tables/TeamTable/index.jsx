/**
 * @module 劳务队伍表格
 */
import { Table } from 'lanlinker';
import { useModel } from 'umi';

export default ({ dataSource, ...props }) => {
  const { setModalInfo } = useModel('projectAttendance', model => ({
    setModalInfo: model.setModalInfo,
  }));

  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={teamColumns}
      scroll={{
        x: 3000,
      }}
      onRow={record => ({
        onClick() {
          setModalInfo({
            visible: true,
            type: 'group',
            id: '1',
            breadcrumb: ['XXX队伍'],
          });
        },
      })}
      {...props}
    ></Table>
  );
};
const dayList = new Array(31).fill(1).map((v, i) => {
  const day = (i + 1 + '').padStart(2, '0') + '日';
  return { title: day, dataIndex: i };
});

const teamColumns = [
  {
    title: '序号',
    render(t, r, i) {
      return i;
    },
  },
  {
    title: '劳务队伍名称',
    dataIndex: 'a',
  },
  {
    title: '劳务队长姓名',
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
