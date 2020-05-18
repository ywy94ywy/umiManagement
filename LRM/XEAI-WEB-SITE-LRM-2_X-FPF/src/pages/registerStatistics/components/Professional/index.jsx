/**
 * @module 专业分包组
 * @todo 根据数据处理情况重新封装
 */
import React, { useState } from 'react';
import { Row, Radio, Button } from 'antd';
import Company from './Company'
import Team from './Team'
import Group from './Group'
import Staff from './Staff'

const TYPE = ['劳务公司', '劳务队伍', '劳务班组', '劳务人员'];

export default () => {
  const [type, setType] = useState(TYPE[0]);

  return (
    <>
      <Row justify="space-between" style={{ marginBottom: 10 }}>
        <Radio.Group value={type} onChange={e => setType(e.target.value)}>
          {TYPE.map((v, i) => (
            <Radio.Button value={v}>{v}</Radio.Button>
          ))}
        </Radio.Group>
        <Button type="primary">excel导出</Button>
      </Row>
      <Switcher current={type}></Switcher>
    </>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case TYPE[0]:
      return <Company></Company>;
    case TYPE[1]:
      return <Team></Team>;
    case TYPE[2]:
      return <Group></Group>;
    case TYPE[3]:
      return <Staff></Staff>;
    default:
      return null;
  }
};
