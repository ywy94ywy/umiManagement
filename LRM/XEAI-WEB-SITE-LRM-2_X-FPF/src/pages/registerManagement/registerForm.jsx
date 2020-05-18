import { Input, Select, Button } from 'antd';

export default [
  {
    colSpan: 2,
    component: <h3>综合信息</h3>,
  },
  {
    name: '1',
    label: '姓名',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '2',
    label: '身份证号',
    component: <Input></Input>,
    required: true,
  },
  {
    colSpan: 2,
    component: <h3>证件信息</h3>,
  },
  {
    name: '3',
    label: '证件地区',
    colSpan: 2,
    component: <Input></Input>,
    required: true,
  },
  {
    name: '4',
    label: '证件类型',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '5',
    label: '证件地址',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '6',
    label: '证件照（正面）',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '7',
    label: '证件照（反面）',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '8',
    label: '有效日期',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '9',
    label: '签发机关',
    component: <Input></Input>,
    required: true,
  },
  {
    colSpan: 2,
    component: <h3>扩展信息</h3>,
  },
  {
    name: '10',
    label: '性别',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '11',
    label: '民族',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '12',
    label: '文化程度',
    component: <Input></Input>,
    required: true,
  },

  {
    name: '13',
    label: '学位',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '14',
    label: '婚姻状况',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '15',
    label: '政治面貌',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '16',
    label: '特长',
    component: <Input></Input>,
    required: true,
  },
  {
    hold: true,
  },
  {
    colSpan: 2,
    component: <h3>综合信息</h3>,
  },
  {
    name: '17',
    label: '员工手机',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '18',
    label: '身份证件照',
    component: (
      <div style={{ position: 'relative', height: 32 }}>
        <div style={{ position: 'absolute', top: 0, zIndex: 2 }}>img</div>
        <Button
          type="primary"
          style={{
            position: 'absolute',
            top: 50,
            left: 100,
            zIndex: 2,
          }}
        >
          高拍仪
        </Button>

        <Button
          type="primary"
          style={{
            position: 'absolute',
            top: 100,
            left: 100,
            zIndex: 2,
          }}
        >
          本地上传
        </Button>
      </div>
    ),
    required: true,
  },
  {
    name: '19',
    label: '常用地址',
    component: <Input></Input>,
    required: true,
  },
  {
    hold: true,
  },
  {
    name: '20',
    label: '出生日期',
    component: <Input></Input>,
    required: true,
  },
  {
    colSpan: 2,
    component: <h3>劳务信息</h3>,
  },
  {
    name: '21',
    label: (
      <Select defaultValue="管理标签">
        <Select.Option value="管理标签">管理标签</Select.Option>
        <Select.Option value="劳务标签">劳务标签</Select.Option>
      </Select>
    ),
    component: <Input></Input>,
    required: true,
  },
  {
    name: '22',
    label: '成员职务',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '23',
    label: '岗位',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '24',
    label: '工号',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '25',
    label: '技术等级',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '26',
    label: '是否加入公会',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '27',
    label: '加入公会时间',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '28',
    label: '开始从业时间',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '29',
    label: '社会保障卡号',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '30',
    label: '购买意外险',
    component: <Input></Input>,
    required: true,
  },
  {
    name: '31',
    label: '有重大病史',
    component: <Input></Input>,
    required: true,
  },
  {
    colSpan: 2,
    component: <h3>银行信息</h3>,
  },
  {
    colSpan: 2,
    component: <h3>bank</h3>,
  },
  {
    colSpan: 2,
    component: <h3>联系人信息</h3>,
  },
  {
    colSpan: 2,
    component: <h3>table</h3>,
  },
];
