import { Select } from 'antd';

// 参建各方基本信息
export default disabled => {
  
  return [
    {
      label: '劳务分包单位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '劳务甲指分包单位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '劳务专业分包单位',
      component: <Select disabled={disabled}></Select>,
    },
  ];
};
