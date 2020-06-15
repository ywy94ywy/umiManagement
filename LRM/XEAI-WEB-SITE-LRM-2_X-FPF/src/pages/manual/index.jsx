/**
 * @module 操作手册
 */
import React from 'react';
import { Card } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper className={styles.manual}>
      <Card style={{ width: 1080, margin: '0 auto' }}>hello</Card>
    </PageHeaderWrapper>
  );
};
