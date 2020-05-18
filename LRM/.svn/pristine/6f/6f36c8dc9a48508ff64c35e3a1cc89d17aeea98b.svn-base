/**
 * @module 现场工人岗位分布
 */
import React, { useState } from 'react';
import WorkerBar from './WorkerBar';
import { Radio } from 'antd';

const WORKERS = ['管理人员', '劳务工人'];

export default ({ managersData = [], laborsData = [] }) => {
  const [worker, setWorker] = useState(WORKERS[0]);
  return (
    <>
      <Radio.Group value={worker} onChange={key => setWorker(key.target.value)}>
        {WORKERS.map(v => (
          <Radio.Button value={v} key={v}>
            {v}
          </Radio.Button>
        ))}
      </Radio.Group>
      {worker === WORKERS[0] && (
        <WorkersStatistics workers={managers} data={managersData}></WorkersStatistics>
      )}
      {worker === WORKERS[1] && (
        <WorkersStatistics workers={labors} data={laborsData}></WorkersStatistics>
      )}
    </>
  );
};

// 工人统计
const WorkersStatistics = ({ workers, data }) => {
  const keys = Object.keys(workers);
  return keys.map((key, index) => {
    return (
      <WorkerBar
        key={key}
        name={workers[key]}
        current={data.current[key]}
        total={data.total[key]}
        index={index}
      />
    );
  });
};

const managers = {
  a: '施工员',
  b: '质检员',
  c: '安全员',
  d: '标准员',
  e: '材料员',
  f: '机械员',
  g: '劳务员',
  h: '项目总工',
};

const labors = {
  a: '木工',
  b: '钢筋工',
  c: '电工',
  d: '抹灰工',
  e: '电焊工',
  f: '水泥工',
  g: '塔吊工',
  h: '机修工',
};
