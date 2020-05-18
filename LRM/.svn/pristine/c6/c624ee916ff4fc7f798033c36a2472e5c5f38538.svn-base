import React from 'react';
import { List, Button } from 'antd';
import profileHolder from './profile.png';
import styles from './style.less';

export default ({
  profile = profileHolder,
  name = '员工姓名',
  post = '岗位',
  company,
  team,
  group,
  buttonProps: { text = '', ...props } = {},
}) => (
  <List.Item className={styles.listItem}>
    <List.Item.Meta
      avatar={<img src={profile} alt="头像" className={styles.profile} />}
      title={name}
      description={
        <>
          <p>{post}</p>
          <div>劳务公司：{company}</div>
          <div>队伍：{team}</div>
          <div>班组：{group}</div>
        </>
      }
    />
    {text && (
      <Button type="primary" size="small" className={styles.btn} {...props}>
        {text}
      </Button>
    )}
  </List.Item>
);
