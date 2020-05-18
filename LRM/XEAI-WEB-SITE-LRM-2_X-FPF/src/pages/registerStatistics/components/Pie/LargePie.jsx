import { Chart, Geom, Tooltip, Coord, Legend, Guide } from 'bizcharts';

export default ({ data }) => {
  const newData = data
    .map(v => ({ [v.name]: v.value }))
    .reduce((t, v) => ({ ...t, ...v }));

  const total = Object.values(newData).reduce((t, v) => t + v);

  return (
    <Chart
      data={data}
      width={240}
      height={350}
      forceFit
      padding={[0, 10, 100, 10]}
    >
      <Coord type="theta" innerRadius={0.8} />
      <Geom type="intervalStack" position="value" color="name" />
      <Tooltip showTitle={false}></Tooltip>
      <Guide>
        <Guide.Text
          position={['50%', '45%']}
          content="资料登记总人数"
          style={{
            lineHeight: '20px',
            fontSize: '14',
            textAlign: 'center',
          }}
        />
        <Guide.Html
          position={['50%', '55%']}
          html={`<div style="font-size:24px;font-weight:bold;">${total}<span style="font-size:14px;">人</span></div>`}
        />
      </Guide>
      <Legend
        layout="vertical"
        itemFormatter={v => {
          return (
            v + ` ${newData[v]}（${Math.ceil((newData[v] * 100) / total)}%）`
          );
        }}
      />
    </Chart>
  );
};
