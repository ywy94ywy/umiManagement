import React from 'react';
import { Card } from 'antd';
import { Chart, Geom, Tooltip, Coord, Legend, Guide } from 'bizcharts';

const SideProportion = ({}) => (
  <Card
    bordered={false}
    title="各端使用占比"
    style={{
      height: '100%',
    }}
  >
    <Chart height={300} data={data} padding={[20, 200, 20, 0]} forceFit style={{ marginTop: 50 }}>
      <Coord type="theta" innerRadius={0.75} />
      <Legend
        position="right-center"
        itemFormatter={v => {
          return v + '\t\t' + dataMap[v];
        }}
      />
      <Tooltip
        showTitle={false}
        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      />
      <Guide>
        <Guide.Html
          position={['50%', '50%']}
          html={`<div style="color:#8c8c8c;font-size:1.3em;text-align: center;width: 10em;"><span style="color:#262626;font-size:2em">${50000}</span><br>总计</div>`}
          alignX="middle"
          alignY="middle"
        />
      </Guide>
      <Geom
        type="intervalStack"
        position="count"
        color="item"
        style={{
          lineWidth: 5,
          stroke: '#fff',
        }}
      ></Geom>
    </Chart>
  </Card>
);

const data = [
  {
    item: '事例一',
    count: 40,
  },
  {
    item: '事例二',
    count: 21,
  },
  {
    item: '事例三',
    count: 17,
  },
  {
    item: '事例四',
    count: 13,
  },
  {
    item: '事例五',
    count: 9,
  },
];

const dataMap = {};
data.forEach(v => {
  dataMap[v.item] = v.count;
});

export default SideProportion;
