import { Select, Input } from 'antd';

// 项目信息
export default disabled => {
  return [
    {
      name: 'a',
      label: '项目编码',
      component: <Input disabled={true}></Input>,
    },
    {
      name: 'b',
      label: '项目中文全名',
      component: <Input disabled={true}></Input>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      name: 'c',
      label: '项目中文简名',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'd',
      label: '立项文号',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'e',
      label: '立项级别',
      component: <Select disabled={disabled}></Select>,
    },
    {
      name: 'f',
      label: '建设用地规划许可证编号',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'g',
      label: '建设工程规划许可证编号',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'h',
      label: '项目描述',
      component: <Input.TextArea disabled={disabled}></Input.TextArea>,
    },
  ];
};
