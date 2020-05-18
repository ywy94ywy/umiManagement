import { Input } from 'antd';

export default () => {
  return [
    {
      label: '模块简介',
      name: 'ba',
      component: <Input></Input>,
    },
    {
      label: '模块描述',
      name: 'bb',
      component: <Input.TextArea></Input.TextArea>,
    },
    {
      label: '模块备注',
      name: 'bc',
      component: <Input.TextArea></Input.TextArea>,
    },
  ];
};
