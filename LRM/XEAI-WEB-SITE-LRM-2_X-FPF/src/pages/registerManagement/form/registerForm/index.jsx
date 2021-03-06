import { Input, Select, DatePicker, Radio, TreeSelect, Divider } from 'antd';
import BankCard from './BankCard';
import ReadID from './ReadID';
import PhotoPicker from './PhotoPicker';
import Profile from './Profile';
import EditTable from './EditTable';

export default ({ editing = true, form } = {}) => {
  const disabled = !editing;
  return [
    {
      colSpan: 2,
      component: (
        <>
          <h3>综合信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: '1',
      label: '姓名',
      component: <Input placeholder="请输入真实姓名" disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      name: '2',
      label: '身份证号',
      component: <ReadID disabled={disabled} form={form} />,
      rules: [{ required: true }],
    },
    {
      colSpan: 2,
      component: (
        <>
          <h3>证件信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: '3',
      label: '证件地区',
      colSpan: 2,
      component: <Input disabled={disabled}></Input>,
      rules: [{ required: true }],
    },
    {
      name: '4',
      label: '证件类型',
      component: (
        <Select disabled={disabled}>
          <Select.Option value="1">居民身份证</Select.Option>
          <Select.Option value="2">护照</Select.Option>
        </Select>
      ),
      rules: [{ required: true }],
    },
    {
      name: '5',
      label: '证件地址',
      component: <Input placeholder="请输入身份证地址" disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      name: '6',
      label: '证件照（正面）',
      component: <PhotoPicker disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      name: '7',
      label: '证件照（反面）',
      component: <PhotoPicker disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      name: '8',
      label: '有效日期',
      component: (
        <DatePicker
          disabled={disabled}
          placeholder="请选择身份证有效日期"
          style={{ width: '100%' }}
        />
      ),
      rules: [{ required: true }],
    },
    {
      name: '9',
      label: '签发机关',
      component: (
        <Input placeholder="请输入身份证签发机关" disabled={disabled} />
      ),
      rules: [{ required: true }],
    },
    {
      colSpan: 2,
      component: (
        <>
          <h3>扩展信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: '10',
      label: '性别',
      component: (
        <Radio.Group disabled={disabled}>
          <Radio value="男">男</Radio>
          <Radio value="女">女</Radio>
        </Radio.Group>
      ),
      rules: [{ required: true }],
    },
    {
      name: '11',
      label: '民族',
      component: <Select disabled={disabled}></Select>,
      rules: [{ required: true }],
    },
    {
      name: '12',
      label: '文化程度',
      component: <Select disabled={disabled}></Select>,
      rules: [{ required: true }],
    },
    {
      name: '13',
      label: '学位',
      component: <Select disabled={disabled}></Select>,
    },
    {
      name: '14',
      label: '婚姻状况',
      component: <Select disabled={disabled}></Select>,
    },
    {
      name: '15',
      label: '政治面貌',
      component: <Select disabled={disabled}></Select>,
      rules: [{ required: true }],
    },
    {
      name: '16',
      label: '特长',
      component: <Input placeholder="请输入特长" disabled={disabled} />,
    },
    { component: null },
    {
      colSpan: 2,
      component: (
        <>
          <h3>综合信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: '17',
      label: '员工手机',
      component: <Input placeholder="请输入常用电话" disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      name: '18',
      label: '身份证件照',
      component: <Profile />,
      rules: [{ required: true }],
    },
    {
      name: '19',
      label: '常用地址',
      component: <Input placeholder="请输入常用地址" disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      component: null,
    },
    {
      name: '20',
      label: '出生日期',
      component: (
        <DatePicker
          placeholder="请选择身份证出生日期"
          disabled={disabled}
          style={{ width: '100%' }}
        />
      ),
      rules: [{ required: true }],
    },
    {
      component: null,
    },
    {
      colSpan: 2,
      component: (
        <>
          <h3>劳务信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: '21',
      label: '工号',
      component: <Input disabled={true} />,
      rules: [{ required: true }],
    },
    {
      name: '211',
      label: '组织分类',
      component: <TreeSelect disabled={disabled} />,
      rules: [{ required: true }],
    },
    {
      name: '22',
      label: '成员职务',
      component: <Select disabled={disabled}></Select>,
    },
    {
      name: '23',
      label: '岗位',
      component: <Select disabled={disabled}></Select>,
      rules: [{ required: true }],
    },
    {
      name: '24',
      label: '开始从业时间',
      component: <DatePicker disabled={disabled} style={{ width: '100%' }} />,
    },
    {
      name: '25',
      label: '技术等级',
      component: <Select disabled={disabled}></Select>,
    },
    {
      name: '251',
      label: '职称等级',
      component: <Select disabled={disabled}></Select>,
    },
    {
      name: '26',
      label: '是否加入公会',
      component: (
        <Select disabled={disabled}>
          <Select.Option value="1">是</Select.Option>
          <Select.Option value="2">否</Select.Option>
        </Select>
      ),
    },
    {
      name: '27',
      label: '加入公会时间',
      component: <DatePicker disabled={disabled} style={{ width: '100%' }} />,
    },
    {
      name: '30',
      label: '购买意外险',
      component: (
        <Select disabled={disabled}>
          <Select.Option value="1">是</Select.Option>
          <Select.Option value="2">否</Select.Option>
        </Select>
      ),
    },
    {
      name: '31',
      label: '有重大病史',
      component: (
        <Select disabled={disabled}>
          <Select.Option value="1">是</Select.Option>
          <Select.Option value="2">否</Select.Option>
        </Select>
      ),
    },
    {
      name: '29',
      label: '社会保障卡号',
      component: <Input disabled={disabled} />,
    },
    {
      colSpan: 2,
      component: (
        <>
          <h3>银行信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: 'card',
      colSpan: 2,
      component: <BankCard disabled={disabled} />,
    },
    {
      colSpan: 2,
      component: (
        <>
          <h3>联系人信息</h3>
          <Dvd />
        </>
      ),
    },
    {
      name: 'table',
      colSpan: 2,
      component: <EditTable disabled={disabled} />,
    },
  ];
};

const Dvd = () => <Divider style={{ margin: 0 }} />;
