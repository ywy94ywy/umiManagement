import { Table } from 'lanlinker';
import { Button, Select, Form, Row, DatePicker, TreeSelect } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, View } from 'bizcharts';

export default () => {
  return (
    <>
      <Row justify="end">
        <Form layout="inline" initialValues={{ a: '1' }}>
          <Form.Item label="组织名称">
            <TreeSelect></TreeSelect>
          </Form.Item>
          <Form.Item label="统计日期区间">
            <DatePicker picker="month"></DatePicker>
          </Form.Item>
          <Form.Item label="员工类型">
            <Select></Select>
          </Form.Item>
          <Form.Item label="岗位">
            <Select></Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary">查询</Button>
          </Form.Item>
          <Form.Item>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </Row>
      <Chart height={400} padding={[20, 70, 70, 70]} forceFit>
        <Legend marker="circle" />
        <View data={data}>
          <Axis name="day" />
          <Geom type="line" position="day*value" color={'status'} size={2} />
        </View>
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
      </Chart>
      <Table
        actions={{
          left: (
            <Form initialValues={{ a: '1' }}>
              <Form.Item label="状态" name="a">
                <Select>
                  <Select.Option value="1">出勤</Select.Option>
                  <Select.Option value="2">在职</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          ),
          right: <strong>单位：人</strong>,
        }}
        dataSource={dataSource}
        columns={columns}
        rowKey={(v, i) => i}
      />
    </>
  );
};

const data = [];
for (let index = 1; index < 31; index++) {
  const a = Math.ceil((Math.random() + 1) * 500);
  const b = Math.ceil(Math.random() * 500);

  data.push({
    status: '在职',
    day: index + '日',
    value: a,
  });

  data.push({
    status: '出勤',
    day: index + '日',
    value: b,
  });
  data.push({
    status: '出勤率',
    day: index + '日',
    pc: +(b / a).toFixed(2),
  });
}

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
    月度: '2019年12月30日',
    区间进场: '200',
    区间退场: '300',
    累计进场: '300',
    累计退场: '300',
    区间在职: '300',
    区间在册: '300',
    员工流动性率: '30%',
    员工出勤率: '30%',
  });
}
