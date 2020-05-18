import { Input, Select } from 'antd';

export default () => {
  return [
    {
      label: '用户全名',
      component: <Input></Input>,
      rules: [{ required: true }],
    },
    {
      label: '用户简名',
      component: <Input></Input>,
      rules: [{ required: true }],
    },
    {
      label: '职能分类',
      component: <Select></Select>,
    },
    {
      label: '项目标签',
      component: <Select></Select>,
    },
    {
      label: '权限标签',
      component: <Select></Select>,
    },
  ];
};
