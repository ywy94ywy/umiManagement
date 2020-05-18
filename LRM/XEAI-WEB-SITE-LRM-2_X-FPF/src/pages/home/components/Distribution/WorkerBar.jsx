import React, { useEffect, useState, useMemo } from 'react';
import styles from '../style.less';

const WORKERS_COLOR = [
  '#1890FF',
  '#f47b8f',
  '#66d186',
  '#55d3d3',
  '#97d3ec',
  '#a575e6',
  '#da8dd6',
  '#ecb183',
];

// 工人统计条
const WorkerBar = ({ name, current, total, index }) => {
  const [value, setValue] = useState(0);
  const percent = useMemo(() => Math.floor((current * 100) / total), [current, total]);

  useEffect(() => {
    const increase = setTimeout(() => {
      if (value < percent) {
        setValue(v => (v + 3 <= 100 ? v + 3 : 100));
      }
    }, 5);
    return () => {
      clearTimeout(increase);
    };
  }, [percent, value]);

  return (
    <div className={styles.workerBar}>
      <span className={styles.name}>{name}</span>
      <span className={styles.current}>
        <span
          style={{ width: `${value}%`, background: WORKERS_COLOR[index % WORKERS_COLOR.length] }}
        >
          {current}
        </span>
      </span>
      <span className={styles.total}>{total}</span>
    </div>
  );
};

export default WorkerBar;
