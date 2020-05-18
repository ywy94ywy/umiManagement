import { Table } from 'lanlinker';

export default () => {
  return (
    <Table
      actions={{
        right: <strong>单位：人</strong>,
      }}
      dataSource={dataSource}
      columns={columns}
      rowKey={(v, i) => i}
    />
  );
};

const dataSource = [];
const columns = [];

{
  columns.push({
    title: '岗位',
    dataIndex: 'post',
    width: 120,
    fixed: 'left',
    render: (t, r, i) => (i === 9 ? <strong>{t}</strong> : t),
  });

  for (let index = 1; index < 31; index++) {
    columns.push({
      title: index + '日',
      dataIndex: 'day' + index,
      render: (t, r, i) => (i === 9 ? <strong>{t}</strong> : t),
    });
  }

  columns.push({
    title: '合计',
    dataIndex: 'total',
    width: 150,
    fixed: 'right',
    render: (t, r, i) => (i === 9 ? <strong>{t}</strong> : t),
  });
}

{
  for (let i = 0; i < 9; i++) {
    let a = {};
    a.post = 'XX工';
    for (let index = 1; index < 31; index++) {
      a['day' + index] = 123;
    }
    a.total = 123;
    dataSource.push(a);
  }
  let a = {};
  a.post = '总计';
  for (let index = 1; index < 31; index++) {
    a['day' + index] = 123;
  }
  a.total = 123;
  dataSource.push(a);
}


for (let index = 1; index < 10; index++) {
  dataSource.push({
    '月度': '2019年12月30日',
    '区间进场': '200',
    '区间退场': '300',
    '累计进场': '300',
    '累计退场': '300',
    '区间在职': '300',
    '区间在册': '300',
    '员工流动性率': '30%',
    '员工出勤率': '30%',
  });
}