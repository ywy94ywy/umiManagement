import { Select, Input } from 'antd';

// 工程监管方信息
export default disabled => {
  return [
    {
      label: '承建工程名称',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '监管工程名称',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '工程监管单位',
      component: <Input disabled={disabled}></Input>,
    },
  ];
};
