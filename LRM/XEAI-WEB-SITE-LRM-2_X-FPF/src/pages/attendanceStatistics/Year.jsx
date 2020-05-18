import { Button, Select, Form, Row, DatePicker } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, View } from 'bizcharts';

const { RangePicker } = DatePicker;

export default () => {
  return (
    <>
      <Row justify="end">
        <Form layout="inline">
          <Form.Item label="统计日期区间">
            <RangePicker></RangePicker>
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
    </>
  );
};

const data = [];


for (let index = 1; index < 13; index++) {
  const a = Math.ceil((Math.random() + 1) * 500);
  const b = Math.ceil(Math.random() * 500);

  data.push({
    status: '在职',
    day: index + '月',
    value: a,
  });

  data.push({
    status: '出勤',
    day: index + '月',
    value: b,
  });
  data.push({
    status: '出勤率',
    day: index + '月',
    pc: +(b / a).toFixed(2),
  });
}
