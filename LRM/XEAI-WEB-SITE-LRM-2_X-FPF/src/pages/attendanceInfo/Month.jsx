import { Table } from 'lanlinker';
import { Button, Select, Form, Row, DatePicker, TreeSelect, Space } from 'antd';
import { Chart, Line, Tooltip, Legend, Point } from 'bizcharts';

export default ({ orgTree }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Row justify="end">
        <Form layout="inline" initialValues={{ a: '1' }}>
          <Form.Item label="组织名称">
            <TreeSelect treeData={orgTree}></TreeSelect>
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
      <Chart
        data={chartData}
        height={500}
        padding={[50, 120, 50, 60]}
        autoFit
        scale={{
          percent: {
            min: 0,
            max: 100,
            formatter: e => e + '%',
          },
        }}
      >
        <Tooltip shared showCrosshairs />
        <Legend />
        <Line position="day*value" color="type" />
        <Point position="day*value" color="type" />
        <Line
          position="day*percent"
          color={['type', ['#fdae6b']]}
          shape="dash"
        />
        <Point position="day*percent" color={['type', ['#fdae6b']]} />
      </Chart>
      <Table
        actions={{
          left: (
            <Form initialValues={{ a: '1' }} layout="inline">
              <Form.Item label="状态" name="a">
                <Select>
                  <Select.Option value="1">考勤</Select.Option>
                  <Select.Option value="2">在职</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          ),
          right: <strong>单位：人</strong>,
        }}
        scroll={{ x: 2500 }}
        dataSource={dataSource}
        columns={columns}
        rowKey={(v, i) => i}
      />
    </Space>
  );
};

const dataSource = [];
const dayList = new Array(31).fill(1).map((v, i) => {
  const day = (i + 1 + '').padStart(2, '0') + '日';
  return {
    title: day,
    dataIndex: 'day' + i,
    ellipsis: true,
  };
});
const columns = [
  {
    title: '岗位',
    dataIndex: 'post',
    width: 120,
    ellipsis: true,
    fixed: 'left',
  },
  ...dayList,
  {
    title: '合计',
    dataIndex: 'total',
    width: 120,
    ellipsis: true,
    fixed: 'right',
  },
];

// 以下假数据
{
  for (let i = 0; i < 9; i++) {
    let a = {};
    a.post = 'XX工';
    for (let index = 0; index < 31; index++) {
      a['day' + index] = 123;
    }
    a.total = 123;
    dataSource.push(a);
  }
  let a = {};
  a.post = '总计';
  for (let index = 0; index < 31; index++) {
    a['day' + index] = 123;
  }
  a.total = 123;
  dataSource.push(a);
}

const chartData = new Array(31).fill(1).reduce((t, v, i) => {
  const n1 = Math.floor(Math.random() * 1800) + 1200;
  const n2 = Math.floor(Math.random() * n1);
  const n3 = Math.round((n2 / n1) * 100);
  const day = (i + 1 + '').padStart(2, '0') + '日';

  return t.concat([
    {
      day: day,
      value: n1,
      type: '在职',
    },
    {
      day: day,
      value: n2,
      type: '考勤',
    },
    {
      day: day,
      percent: n3,
      type: '考勤率',
    },
  ]);
}, []);
