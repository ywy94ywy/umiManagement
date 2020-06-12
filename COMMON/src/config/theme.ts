import { STATIC_IMAGE } from './address';

export const THEME_CONFIG = {
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
  background: {
    pure: {
      title: '纯色主题',
      value: ['#1C1F87', '#DA5E3E', '#7F7F7F', '#1890FF'],
    },
    gradient: {
      title: '渐变主题',
      value: [
        'linear-gradient(180deg,rgba(127,127,213,1) 0%,rgba(134,168,231,1) 54%,rgba(145,234,228,1) 100%)',
        'linear-gradient(180deg,rgba(247,121,125,1) 0%,rgba(251,215,134,1) 54%,rgba(198,255,221,1) 100%)',
        'linear-gradient(180deg,rgba(18,194,233,1) 0%,rgba(196,113,237,1) 54%,rgba(247,121,125,1) 100%)',
        'linear-gradient(180deg,rgba(247,121,125,1) 0%,rgba(33,150,243,1) 100%)',
      ],
    },
    architecture: {
      title: '建筑系列',
      value: [
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_1.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_2_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_2.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_3_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_3.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/architecture_4_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/architecture_4.png)`,
        },
      ],
    },
    sky: {
      title: '星空系列',
      value: [
        {
          thumb: `url(${STATIC_IMAGE}/skin/sky_1_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/sky_1.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/sky_2_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/sky_2.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/sky_3_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/sky_3.png)`,
        },
        {
          thumb: `url(${STATIC_IMAGE}/skin/sky_4_thumb.png)`,
          img: `url(${STATIC_IMAGE}/skin/sky_4.png)`,
        },
      ],
    },
  },
};
