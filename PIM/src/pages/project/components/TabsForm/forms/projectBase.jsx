import { Input, Select, Space } from 'antd';

// 工程基本信息
export default disabled => {
  return [
    {
      label: '工程编码',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程编号',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程中文全名',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程类型',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '工程状态',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '建设规模',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '建设性质',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '工程用途',
      component: <Select disabled={disabled}></Select>,
    },
    {
      label: '工程所在地',
      component: (
        <Space>
          <Select disabled={disabled}></Select>
          <Select disabled={disabled}></Select>
          <Select disabled={disabled}></Select>
          <Select disabled={disabled}></Select>
        </Space>
      ),
      colSpan: 2,
    },
    {
      label: '工程地点',
      component: <Input disabled={disabled}></Input>,
      colSpan: 2,
    },
    {
      label: 'WGS84经度',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: 'WGS84纬度',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程投资金额',
      component: (
        <Space>
          <Input disabled={disabled}></Input>
          <span>万元</span>
        </Space>
      ),
    },
    {
      label: '工程建筑面积',
      component: (
        <Space>
          <Input></Input>
          <span>㎡</span>
        </Space>
      ),
    },
    {
      label: '工程建筑长度',
      component: (
        <Space>
          <Input disabled={disabled}></Input>
          <span>米</span>
        </Space>
      ),
    },
    {
      name: 'abc',
      label: '施工许可证编号',
      component: <Input disabled={disabled}></Input>,
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      label: '工程开工日期',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程竣工日期',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程代发银行账户',
      component: <Select disabled={disabled}></Select>,
      colSpan: 2,
    },
    {
      label: '项目经理',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '联系电话',
      component: <Input disabled={disabled}></Input>,
    },
    {
      label: '工程描述',
      component: <Input.TextArea disabled={disabled}></Input.TextArea>,
      colSpan: 2,
    },
  ];
};
