import { Input, DatePicker, Select } from 'antd';
import PositionSelect from '../PositionSelect';

export default ({ editing = true } = {}) => {
  const disabled = !editing;

  return [
    {
      label: '卡号',
      name: 'a',
      component: <Input disabled={disabled} />,
    },
    {
      label: '启用时间',
      component: <DatePicker disabled={disabled} style={{ width: '100%' }} />,
    },
    {
      label: '失效时间',
      component: <DatePicker disabled={disabled} style={{ width: '100%' }} />,
    },
    {
      label: '授权位置',
      name: 'd',
      component: <PositionSelect disabled={disabled} />,
    },
    {
      label: '持卡人姓名',
      component: <Input disabled={disabled} />,
    },
    {
      label: '身份证号',
      component: <Input disabled={disabled} />,
    },
    {
      label: '持卡人手机号',
      component: <Input disabled={disabled} />,
    },
    {
      label: '代收人姓名',
      component: <Input disabled={disabled} />,
    },
    {
      label: '卡片用途',
      name: 'i',
      component: (
        <Select disabled={disabled}>
          <Select.Option value="1">参观拜访</Select.Option>
          <Select.Option value="2">上级检查</Select.Option>
          <Select.Option value="3">经办人员姓名</Select.Option>
        </Select>
      ),
    },
    {
      label: '卡片备注',
      component: <Input disabled={disabled} />,
    },
    {
      label: '制卡时间',
      component: <span>time</span>,
    },
    {
      label: '制卡操作人',
      component: <span>xxx</span>,
    },
  ];
};
