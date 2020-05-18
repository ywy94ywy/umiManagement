/**
 * @module 心知天气
 */

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import {
  ScheduleOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import styles from './style.less';

moment.locale('zh-cn');

const win: any = window;

const TimeWeather: React.FC<{
  style?: React.CSSProperties;
  className?: string;
}> = ({ style, className }) => {
  const [calendar, setCalendar] = useState(new Date());

  useEffect(() => {
    // 心知天气初始化
    win['SeniverseWeatherWidgetObject'] = 'SeniverseWeatherWidget';
    win['SeniverseWeatherWidget'] ||
      (win['SeniverseWeatherWidget'] = function() {
        (win['SeniverseWeatherWidget'].q =
          win['SeniverseWeatherWidget'].q || []).push(arguments);
      });
    win['SeniverseWeatherWidget'].l = +new Date();
    const date = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];
    date.src =
      '//cdn.sencdn.com/widget2/static/js/bundle.js?t=' +
      parseInt((new Date().getTime() / 100000000).toString(), 10);
    date.charset = 'utf-8';
    date.async = true;
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(date, firstScript);
    }
  }, []);

  useEffect(() => {
    // 心知天气展示
    win.SeniverseWeatherWidget('show', {
      flavor: 'slim',
      location: 'WTW3SJ5ZBJUY',
      geolocation: true,
      language: 'zh-Hans',
      unit: 'c',
      theme: 'dark',
      token: 'd541121a-748b-4b47-82cf-e73f928f9766',
      hover: 'enabled',
      container: 'tp-weather-widget',
    });

    // 日期
    const timeout = setTimeout(() => {
      setCalendar(new Date());
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  });

  const date = moment(calendar);
  const week = date.format('dddd');
  const day = date.format('YYYY年MM月DD日');
  const time = date.format('hh:mm:ss a');

  return (
    <div className={classNames(styles.timeWeather, className)} style={style}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <ScheduleOutlined />
          <span>{week}</span>
          <span>{day}</span>
        </div>
        <div className={styles.iconWrapper}>
          <ClockCircleOutlined />
          <span>{time}</span>
        </div>
        <div className={styles.iconWrapper}>
          <EnvironmentOutlined />
          <div id="tp-weather-widget" className={styles.weather}></div>
        </div>
      </div>
    </div>
  );
};

export default TimeWeather;
