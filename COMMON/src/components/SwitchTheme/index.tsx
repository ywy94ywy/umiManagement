/**
 * @module 主题切换
 * @todo 2.是否需要持久化存储;
 * @todo 3.样式文件看情况写进配置文件;
 */
import React, { Fragment, useState } from 'react';
import { Radio, Popover } from 'antd';
import { SkinOutlined, CheckOutlined } from '@ant-design/icons';
import { STATIC_IMAGE } from '../../config';
import styles from './style.less';

// 主题样式
const themeData = {
  fontSize: [
    {
      title: '小',
      value: '14px',
    },
    {
      title: '大',
      value: '16px',
    },
  ],
  background: [
    {
      title: '纯色主题',
      value: ['#1C1F87', '#DA5E3E', '#7F7F7F', '#1890FF'],
    },
    {
      title: '渐变主题',
      value: [
        'linear-gradient(180deg,rgba(127,127,213,1) 0%,rgba(134,168,231,1) 54%,rgba(145,234,228,1) 100%)',
        'linear-gradient(180deg,rgba(247,121,125,1) 0%,rgba(251,215,134,1) 54%,rgba(198,255,221,1) 100%)',
        'linear-gradient(180deg,rgba(18,194,233,1) 0%,rgba(196,113,237,1) 54%,rgba(247,121,125,1) 100%)',
        'linear-gradient(180deg,rgba(247,121,125,1) 0%,rgba(33,150,243,1) 100%)',
      ],
    },
    {
      title: '建筑系列',
      value: [
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
      ],
    },
    {
      title: '星空系列',
      value: [
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
        },
      ],
    },
  ],
};

// 设置css变量
const setTheme = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value);
};
// 获取css变量
const getTheme = (name: string) => {
  return document.documentElement.style.getPropertyValue(name);
};

const defaultTheme = {
  fontSize: themeData.fontSize[0].value,
  background: themeData.background[0].value[0] as string,
};
setTheme('--fontSize', defaultTheme.fontSize);
setTheme('--background', defaultTheme.background);

export default () => {
  return (
    <Popover
      placement="bottomRight"
      overlayClassName={styles.themePanel}
      content={<Content></Content>}
      trigger="click"
    >
      <div className={styles.switchTheme}>
        <SkinOutlined />
      </div>
    </Popover>
  );
};

const Content = () => {
  const { fontSize, background } = themeData;
  const [bg, setBg] = useState(getTheme('--background'));

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>字体大小</div>
      <Radio.Group
        className={styles.fontList}
        defaultValue={defaultTheme.fontSize}
      >
        {fontSize.map((item, index) => (
          <Radio
            key={index}
            value={item.value}
            onChange={() => {
              setTheme('--fontSize', item.value);
            }}
          >
            {item.title}
          </Radio>
        ))}
      </Radio.Group>
      {background.slice(0, 2).map((item, index) => {
        return (
          <Fragment key={index}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.bgList}>
              {item.value.map((v, i) => (
                <div
                  key={i}
                  className={styles.circle}
                  style={{ background: v }}
                  onClick={() => {
                    setTheme('--background', v);
                    setBg(v);
                  }}
                >
                  {bg === v && <CheckOutlined />}
                </div>
              ))}
            </div>
          </Fragment>
        );
      })}
      {background.slice(2).map((item, index) => {
        return (
          <Fragment key={index}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.bgList}>
              {item.value.map((v, i) => (
                <div
                  key={i}
                  className={styles.rectangle}
                  style={{ backgroundImage: v.thumb }}
                  onClick={() => {
                    setTheme('--background', v.img);
                    setBg(v.img);
                  }}
                >
                  {bg === v.thumb && <CheckOutlined />}
                </div>
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
