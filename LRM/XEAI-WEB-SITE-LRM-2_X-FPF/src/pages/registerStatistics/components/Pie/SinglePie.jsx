import { Chart, Geom, Tooltip, Coord, Legend, Guide } from 'bizcharts';

export default ({ data, color }) => {
  const value = parseInt(data.value);
  data.value = value;
  const newData = [data, { name: '其他', value: 100 - value }];

  return (
    <Chart
      data={newData}
      scale={{
        value: {
          formatter(v) {
            return v + '%';
          },
        },
      }}
      width={120}
      height={175}
      padding={[20, 0, 45, 0]}
      forceFit
    >
      <Coord type="theta" innerRadius={0.8} />
      <Geom
        type="intervalStack"
        position="value"
        select={false}
        color={['name', a => (a === '其他' ? '#ccc' : color)]}
      />
      <Tooltip showTitle={false}></Tooltip>
      <Guide>
        <Guide.Html
          position={['50%', '50%']}
          html={`<div style="font-size:24px;font-weight:bold;">${data.value}%</div>`}
        />
      </Guide>
      <Legend layout="vertical" />
    </Chart>
  );
};
