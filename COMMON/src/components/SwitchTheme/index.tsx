/**
 * @module 主题切换
 * @todo 朦胧选择与上传图片未实现;
 * @todo 是否需要持久化存储;
 */
import React, { useContext, useMemo } from 'react';
import { Radio, Popover, Divider } from 'antd';
import { SkinOutlined, CheckOutlined } from '@ant-design/icons';
import { THEME_CONFIG } from '../../config';
import { ThemeContext } from '../Context/theme';
import styles from './style.less';

export default () => {
  const { icFs } = useContext(ThemeContext);

  return (
    <Popover
      placement="bottomRight"
      overlayClassName={styles.themePanel}
      content={<Content />}
      trigger="click"
    >
      <div className={styles.switchTheme}>
        <SkinOutlined style={{ fontSize: icFs, transition: 'all 0.2s' }} />
      </div>
    </Popover>
  );
};

const Content = () => {
  const { fs, bg, setFs, setBg } = useContext(ThemeContext);
  const {
    fontSize,
    background: { pure, gradient, architecture, sky },
  } = THEME_CONFIG;
  return useMemo(
    () => (
      <div className={styles.wrapper}>
        <header className={styles.title}>字体大小</header>
        <Radio.Group className={styles.fontList} defaultValue={fs}>
          {fontSize.map((item, index) => (
            <Radio
              key={index}
              value={item.value}
              onChange={() => setFs(item.value)}
            >
              {item.title}
            </Radio>
          ))}
        </Radio.Group>
        <Divider className={styles.divider} />
        <header className={styles.title}>{pure.title}</header>
        <ul className={styles.bgList}>
          {pure.value.map((v, i) => (
            <li
              key={i}
              className={styles.circle}
              style={{ background: v }}
              onClick={() => setBg(v)}
            >
              {bg === v && <CheckOutlined />}
            </li>
          ))}
        </ul>
        <Divider className={styles.divider} />
        <header className={styles.title}>{gradient.title}</header>
        <ul className={styles.bgList}>
          {gradient.value.map((v, i) => (
            <li
              key={i}
              className={styles.circle}
              style={{ background: v }}
              onClick={() => setBg(v)}
            >
              {bg === v && <CheckOutlined />}
            </li>
          ))}
        </ul>
        <Divider className={styles.divider} />
        <header className={styles.title}>{architecture.title}</header>
        <ul className={styles.bgList}>
          {architecture.value.map((v, i) => (
            <li
              key={i}
              className={styles.rectangle}
              style={{ backgroundImage: v.thumb }}
              onClick={() => setBg(v.img)}
            >
              {bg === v.img && <CheckOutlined />}
            </li>
          ))}
        </ul>
        <Divider className={styles.divider} />
        <header className={styles.title}>{sky.title}</header>
        <ul className={styles.bgList}>
          {sky.value.map((v, i) => (
            <li
              key={i}
              className={styles.rectangle}
              style={{ backgroundImage: v.thumb }}
              onClick={() => setBg(v.img)}
            >
              {bg === v.img && <CheckOutlined />}
            </li>
          ))}
        </ul>
      </div>
    ),
    [fs, bg],
  );
};
