import React, { useState } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import Month from './Month';
import Year from './Year';

const DEMENSION = ['月度', '年度'];
const DIMENSION_LIST = DEMENSION.map(v => ({ tab: v, key: v }));

export default () => {
  const [dimension, setDimension] = useState(DEMENSION[0]);

  return (
    <PageHeaderWrapper>
      <Card
        tabList={DIMENSION_LIST}
        activeTabKey={dimension}
        onTabChange={key => setDimension(key)}
      >
        {dimension === DEMENSION[0] && <Month />}
        {dimension === DEMENSION[1] && <Year />}
      </Card>
    </PageHeaderWrapper>
  );
};
