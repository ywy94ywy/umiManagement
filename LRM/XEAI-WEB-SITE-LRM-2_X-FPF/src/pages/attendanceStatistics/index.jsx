import React, { useState } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import Month from './Month';
import Year from './Year';
import Attendance from './Attendance';
import Serving from './Serving';

const DIMENSION = ['月度', '年度'];
const DIMENSION_LIST = DIMENSION.map(v => ({ key: v, tab: v }));
const STATE = ['出勤', '在职'];
const STATE_LIST = STATE.map(v => ({ key: v, tab: v }));

export default () => {
  const [dimension, setDimension] = useState(DIMENSION[0]);
  const [state, setState] = useState(STATE[0]);

  return (
    <PageHeaderWrapper>
      <Card
        tabList={DIMENSION_LIST}
        activeTabKey={dimension}
        onTabChange={key => setDimension(key)}
      >
        <ChartSwitcher current={dimension}></ChartSwitcher>
      </Card>
      <Card tabList={STATE_LIST} activeTabKey={state} onTabChange={key => setState(key)} marginTop>
        <TableSwitcher current={state}></TableSwitcher>
      </Card>
    </PageHeaderWrapper>
  );
};

const ChartSwitcher = ({ current }) => {
  switch (current) {
    case DIMENSION[0]:
      return <Month></Month>;
    case DIMENSION[1]:
      return <Year></Year>;
    default:
      return null;
  }
};

const TableSwitcher = ({ current }) => {
  switch (current) {
    case STATE[0]:
      return <Attendance></Attendance>;
    case STATE[1]:
      return <Serving></Serving>;
    default:
      return null;
  }
};
