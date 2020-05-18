/**
 * @module 主题切换
 * @todo 2.是否需要持久化存储;
 * @todo 3.样式文件看情况写进配置文件;
 */
import React, { Fragment, useState } from 'react';
import { Radio, Popover } from 'antd';
import { SkinOutlined, CheckOutlined } from '@ant-design/icons';
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
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513608736&di=c8083949ac0dc971a8bf0556cb93984d&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110124%2FImg302502020.jpg)',
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146169344&di=a6dd7cd6af61c20c62f234cb4f0e36c4&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F04%2F15%2F39%2F6658229cbcaea80.jpg)',
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146259908&di=9104579817d6f9f287f7e20d818e0c55&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F0p%2Fwi%2FQJ8558834288.jpg)',
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146271272&di=a1184ef63a7a2bcc2028ab33e1cbabf5&imgtype=0&src=http%3A%2F%2Fs1.1zoom.me%2Fbig3%2F888%2FAustralia_Brisbane_Houses_Rivers_Marinas_Night_547316_3000x1772.jpg)',
      ],
    },
    {
      title: '星空系列',
      value: [
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146131154&di=5d01edc7f22dbb80afb1d5bb0d3b9a62&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F46%2F96%2F305857bbd8c3124.jpg)',
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146152273&di=4b2065e28571261f1f6f05d747523ce2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03871d8582407ada84a0d304f71746f.jpg)',
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146193013&di=4faf2e6597365a347509e64c33adfdb7&imgtype=jpg&src=http%3A%2F%2Fd-iv.com%2Fimages%2F6c310778e2b1776d9585aae2d56c4d5a.jpeg)',
        'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576146224530&di=9baca66d034c9e1c8ae8074203c97f6b&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F48%2F89%2F16488968-f342f3afa79ebe2afa7bd268b2aad066.jpg)',
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
  background: themeData.background[0].value[0],
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
                  style={{ backgroundImage: v }}
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
    </div>
  );
};
