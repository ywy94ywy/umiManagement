/**
 * @module 最近7天出勤统计
 */
import React from 'react';
import { Chart, Geom, Axis, Tooltip, Label } from 'bizcharts';
import { Row, Button } from 'antd';

export default ({ data = [] }) => (
  <>
    <Chart height={400} padding={[20, 20, 30, 40]} data={data} scale={cols} forceFit>
      <Axis
        name="day"
        title={{
          offset: 17, 
          textStyle: {
            fontSize: '12',
            textAlign: 'center',
            fill: '#999',
            fontWeight: 'bold',
           
          }, 
          position: 'end', 
        }}
      />
      <Axis name="value" />
      <Tooltip
        crosshairs={{
          type: 'y',
        }}
      />
      <Geom
        type="interval"
        position="day*value"
        tooltip={[
          'value',
          value => {
            return {
              name: '出勤人数',
              title: '统计',
              value: value,
            };
          },
        ]}
      >
        <Label content="value" formatter={text => text + '人'} />
      </Geom>
    </Chart>
    <Row justify="end">
      <Button type="link">查看更多</Button>
    </Row>
  </>
);

const cols = {
  sales: {
    tickInterval: 20,
  },
  day: {
    alias: '日期',
  },
};
