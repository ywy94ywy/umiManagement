import { DatePicker, Select, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

// 不良行为表单
export const misForm = [
  {
    name: 'a',
    label: '事件时间',
    component: <DatePicker />,
    rules: [{ required: true }],
  },
  {
    name: 'b',
    label: '事件类型',
    rules: [{ required: true }],
    component: (
      <Select>
        <Select.Option value="1">扰乱工地现场秩序</Select.Option>
        <Select.Option value="2">破坏公共财物</Select.Option>
        <Select.Option value="3">抗议示威</Select.Option>
        <Select.Option value="4">打架斗殴</Select.Option>
      </Select>
    ),
  },
  {
    name: 'c',
    label: '事件地点',
    colSpan: 2,
    rules: [{ required: true }],
    component: <Select></Select>,
  },
  {
    label: '事件内容',
    colSpan: 2,
    component: <Input.TextArea />,
  },
  {
    name: 'd',
    label: '严重程度',
    rules: [{ required: true }],
    component: (
      <Select>
        <Select.Option value="1">普通</Select.Option>
        <Select.Option value="2">严重</Select.Option>
        <Select.Option value="3">非常严重</Select.Option>
      </Select>
    ),
  },
  {
    component: null,
  },
  {
    label: '操作人组织全名',
    component: <Input />,
  },
  {
    component: null,
  },
  {
    label: '操作人员全名',
    component: <Input />,
  },
  {
    label: '操作人联系电话',
    component: <Input />,
  },
  {
    label: '备注',
    colSpan: 2,
    component: <Input.TextArea />,
  },
  {
    label: '附件',
    component: (
      <Upload>
        <Button>
          <UploadOutlined />
          上传附件
        </Button>
      </Upload>
    ),
  },
];

// 良好行为表单
export const goodForm = [
  {
    name: 'a',
    label: '事件时间',
    component: <DatePicker />,
    rules: [{ required: true }],
  },
  {
    name: 'b',
    label: '事件类型',
    rules: [{ required: true }],
    component: (
      <Select>
        <Select.Option value="1">拾金不昧</Select.Option>
        <Select.Option value="2">保护项目财产安全</Select.Option>
        <Select.Option value="3">见义勇为</Select.Option>
      </Select>
    ),
  },
  {
    name: 'c',
    label: '事件地点',
    colSpan: 2,
    rules: [{ required: true }],
    component: <Select></Select>,
  },
  {
    label: '事件内容',
    colSpan: 2,
    component: <Input.TextArea />,
  },
  {
    label: '操作人组织全名',
    component: <Input />,
  },
  {
    component: null,
  },
  {
    label: '操作人员全名',
    component: <Input />,
  },
  {
    label: '操作人联系电话',
    component: <Input />,
  },
  {
    label: '备注',
    colSpan: 2,
    component: <Input.TextArea />,
  },
  {
    label: '附件',
    component: (
      <Upload>
        <Button>
          <UploadOutlined />
          上传附件
        </Button>
      </Upload>
    ),
  },
];
