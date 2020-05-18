/**
 * @module 项目概况
 */
import React from 'react';
import styles from './style.less';

const GENERAL_COLOR = ['#F15D9F', '#27C63E', '#FEB614', '#1890FF'];

const General = ({ list }) => (
  <article className={styles.general}>
    {list.map((item, index) => {
      return (
        <div key={index} className={styles.item}>
          <div className={styles.numberWrapper} style={{ color: GENERAL_COLOR[index] }}>
            <span className={styles.number}>{item.number}</span>
            <span>人</span>
          </div>
          <div className={styles.type}>{item.title}</div>
        </div>
      );
    })}
  </article>
);

export default General;
