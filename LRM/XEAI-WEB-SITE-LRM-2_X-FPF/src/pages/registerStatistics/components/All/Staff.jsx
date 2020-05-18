import { Table } from 'lanlinker';

export default () => {
  return <Table columns={columns}></Table>;
};

const columns = [
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
    dataIndex: 'a',
  },
  {
    title: '岗位',
    dataIndex: 'a',
  },
  {
    title: '员工资料完成状态',
    dataIndex: 'a',
  },
  {
    title: '制卡分配完成状态',
    dataIndex: 'a',
  },
  {
    title: '安全教育完成状态',
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
