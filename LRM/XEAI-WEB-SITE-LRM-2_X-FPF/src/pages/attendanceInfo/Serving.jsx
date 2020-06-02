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

  for (let index = 1; index < 13; index++) {
    columns.push({
      title: index + '月',
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
    for (let index = 1; index < 13; index++) {
      a['day' + index] = 123;
    }
    a.total = 123;
    dataSource.push(a);
  }
  let a = {};
  a.post = '总计';
  for (let index = 1; index < 13; index++) {
    a['day' + index] = 123;
  }
  a.total = 123;
  dataSource.push(a);
}
