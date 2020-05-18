/**
 * @module 快捷桌面
 */
import React, { useState, useEffect, forwardRef } from 'react';
import { Checkbox } from 'antd';
import { IconFont } from 'lanlinker';
import styles from './style.less';

export const Shortcuts = ({ list }) => {
  return (
    <div className={styles.shortcuts}>
      {list.map((v, i) => (
        <div className={styles.shortcut} key={i}>
          <IconFont type={v.icon} />
          <div>{v.title}</div>
        </div>
      ))}
    </div>
  );
};

export const CheckableShortcuts = forwardRef(({ list }, ref) => {
  const [data, setData] = useState(list);

  useEffect(() => {
    if (ref) ref.current = data;
  }, [data, ref]);

  return (
    <div className={styles.shortcuts}>
      {data.map((v, i) => (
        <div
          className={styles.shortcut}
          key={i}
          onClick={() => {
            const tempDate = [...data];
            tempDate[i].check = !v.check;
            setData(tempDate);
          }}
        >
          <IconFont type={v.icon} />
          <div>{v.title}</div>
          <Checkbox className={styles.checkable} checked={v.check}></Checkbox>
        </div>
      ))}
    </div>
  );
});

export default Shortcuts;
