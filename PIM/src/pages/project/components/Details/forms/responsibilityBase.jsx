import { Select } from 'antd';

// 五方责任主体基本信息
export default disabled => {
  return [
    {
      label: '承建单位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '建设单位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '勘查单位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '监理单位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '设计单位',
      component: <Select disabled={disabled}></Select>,
    },
  ];
};
