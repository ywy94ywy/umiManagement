import { Input, Radio, Select, Row, Col, message } from 'antd';
import Form from 'antd/lib/form/Form';
import { NATION, EDUCATION, MARRIAGE, POLITICES, BLOOD } from './expandSelect';

export default () => [
  {
    colSpan: 2,
    component: <h3>附加信息</h3>,
  },
  {
    name: 'a',
    label: '用户性别',
    component: (
      <Radio.Group style={{ width: '100%' }}>
        <Row justify="space-around">
          <Radio value={1}>男</Radio>
          <Radio value={2}>女</Radio>
        </Row>
      </Radio.Group>
    ),
    rules: [{ required: true, message: '请选择用户性别' }],
  },
  {
    name: 'b',
    label: '用户民族',
    component: (
      <Select>
        {NATION.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'c',
    label: '用户学历',
    component: (
      <Select>
        {EDUCATION.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'd',
    label: '用户籍贯',
    component: <Input></Input>,
  },
  {
    name: 'e',
    label: '婚姻状况',
    component: (
      <Select>
        {MARRIAGE.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'f',
    label: '政治面貌',
    component: (
      <Select>
        {POLITICES.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    label: '用户身高',
    component: (
      <Row>
        <div style={{ flex: 1 }}>
          <Form.Item noStyle name="g">
            <Input></Input>
          </Form.Item>
        </div>
        <div
          style={{
            flex: '0 0 30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          cm
        </div>
      </Row>
    ),
  },
  {
    label: '用户体重',
    component: (
      <Row>
        <div style={{ flex: 1 }}>
          <Form.Item noStyle name="h">
            <Input></Input>
          </Form.Item>
        </div>
        <div
          style={{
            flex: '0 0 30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          kg
        </div>
      </Row>
    ),
  },
  {
    name: 'iii',
    label: '用户血型',
    component: (
      <Select>
        {BLOOD.map(v => (
          <Select.Option value={v} key={v}>
            {v}
          </Select.Option>
        ))}
      </Select>
    ),
  },
  {
    name: 'jjjj',
    label: '用户特长',
    component: <Input></Input>,
  },
  {
    colSpan: 2,
    component: <h3>工作信息</h3>,
  },
  {
    name: 'k',
    label: '工作单位',
    component: <Input></Input>,
  },
  {
    name: 'l',
    label: '工作电话',
    component: <Input></Input>,
  },
  {
    name: 'm',
    label: '工作手机',
    component: <Input></Input>,
  },
  {
    name: 'n',
    label: '工作微信',
    component: <Input></Input>,
  },
  {
    name: 'o',
    label: '工作QQ',
    component: <Input></Input>,
  },
  {
    name: 'p',
    label: '工作邮箱',
    component: <Input></Input>,
  },
  {
    name: 'q',
    label: '用户职业',
    component: <Input></Input>,
  },
];
