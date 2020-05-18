import { Input } from 'antd';

export default () => {
  return [
    {
      label: '用户虚拟货币总额',
      component: <Input></Input>,
    },
    {
      label: '用户通用积分总额',
      component: <Input></Input>,
    },
    {
      label: '用户银行名称',
      component: <Input></Input>,
    },
    {
      label: '用户银行账号',
      component: <Input></Input>,
    },
  ];
};
