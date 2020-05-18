import { Chart, Geom, Tooltip, Coord, Legend, Guide } from 'bizcharts';

export default ({ data }) => {
  const newData = data
    .map(v => ({ [v.name]: v.value }))
    .reduce((t, v) => ({ ...t, ...v }));

  const total = Object.values(newData).reduce((t, v) => t + v);

  return (
    <Chart
      data={data}
      width={120}
      height={175}
      padding={[20, 0, 45, 0]}
      forceFit
    >
      <Coord type="theta" innerRadius={0.8} />
      <Geom type="intervalStack" position="value" color="name" />
      <Tooltip showTitle={false}></Tooltip>
      <Guide>
        <Guide.Html
          position={['50%', '50%']}
          html={`<div style="font-size:24px;font-weight:bold;">${Math.ceil(
            (data[0].value * 100) / total,
          )}%</div>`}
        />
      </Guide>
      <Legend
        layout="vertical"
        offsetY={-7}
        itemFormatter={v => {
          return (
            v + ` ${newData[v]}（${Math.ceil((newData[v] * 100) / total)}%）`
          );
        }}
      />
    </Chart>
  );
};
