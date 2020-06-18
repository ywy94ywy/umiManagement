import { Form } from 'lanlinker';
import { Input, Select, DatePicker, Space, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default ({ type = 'detail' }) => {
  return (
    <Form
      configForm={configForm(type)}
      labelCol={{ flex: '90px' }}
      style={{ width: '80%', margin: '0 auto' }}
      columns={2}
    />
  );
};

const configForm = type => {
  return [
    {
      label: '培训员工',
      component: <Input disabled />,
    },
    {
      label: '身份证号',
      component: <Input disabled />,
    },
    {
      label: '岗位',
      component: <Input disabled />,
    },
    {
      label: '培训名称',
      component: <Input disabled />,
    },
    {
      label: '培训类型',
      component: <Select disabled />,
    },
    {
      label: '培训时长',
      component: (
        <Space>
          <Input disabled />
          <span style={{ whiteSpace: 'nowrap' }}>小时</span>
        </Space>
      ),
    },
    {
      label: '培训日期',
      component: <DatePicker disabled />,
    },
    {
      label: '培训地点',
      component: <Input disabled />,
    },
    {
      label: '培训老师',
      component: <Input disabled />,
    },
    {
      label: '培训评分',
      component: <Input disabled={type !== 'update'} />,
    },
    {
      label: '是否合格',
      component: <Select disabled />,
    },
    {
      label: '培训简述',
      component: <Input disabled />,
    },
    {
      label: '培训机构',
      component: <Input disabled />,
    },
    {
      label: '备注',
      colSpan: 2,
      component: <Input.TextArea disabled />,
    },
    {
      label: '附件',
      component: (
        <Upload>
          <Button disabled>
            <UploadOutlined />
            上传文件
          </Button>
        </Upload>
      ),
    },
  ];
};
