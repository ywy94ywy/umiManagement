/**
 * @module 考勤信息统计
 * @todo 折线图左侧刻度，虚线legend颜色
 * @todo 图表与表格是否封装成一个
 */
import { useState } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import Month from './Month';
import Year from './Year';

const DEMENSION = ['月度', '年度'];
const DIMENSION_LIST = DEMENSION.map(v => ({ tab: v, key: v }));

export default () => {
  const [dimension, setDimension] = useState(DEMENSION[0]); // 统计维度切换

  return (
    <PageHeaderWrapper>
      <Card
        tabList={DIMENSION_LIST}
        activeTabKey={dimension}
        onTabChange={key => setDimension(key)}
      >
        {dimension === DEMENSION[0] && <Month orgTree={[]} />}
        {dimension === DEMENSION[1] && <Year orgTree={[]} />}
      </Card>
    </PageHeaderWrapper>
  );
};
