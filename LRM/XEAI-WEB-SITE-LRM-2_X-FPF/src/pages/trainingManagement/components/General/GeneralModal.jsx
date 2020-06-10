import { useState } from 'react';
import { Table, ButtonModal, Form } from 'lanlinker';
import {
  Input,
  Select,
  DatePicker,
  Form as AntdForm,
  Button,
  Space,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Table
        actions={{
          left: (
            <>
              <ButtonModal
                buttonProps={{ text: '选择培训员工', type: 'primary' }}
                bodyStyle={{ height: 700, overflow: 'auto' }}
              >
                选择培训员工
              </ButtonModal>
              <Button type="primary" danger>
                批量删除
              </Button>
            </>
          ),
          right: (
            <AntdForm layout="inline" initialValues={{ a: '1' }}>
              <AntdForm.Item>
                <InputWrapper />
              </AntdForm.Item>
              <AntdForm.Item>
                <Button type="primary">查询</Button>
              </AntdForm.Item>
            </AntdForm>
          ),
        }}
      />
      <Form
        columns={2}
        style={{ width: '80%', margin: '24px auto' }}
        labelCol={{ flex: '120px' }}
      >
        <Form.Item label="培训类型" rules={[{ required: true }]}>
          <Select />
        </Form.Item>
        <Form.Item label="培训名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="培训老师" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="培训日期" rules={[{ required: true }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="培训时长" rules={[{ required: true }]}>
          <Space>
            <Input />
            <span>时长</span>
          </Space>
        </Form.Item>
        <Form.Item label="培训地点" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="培训机构">
          <Input />
        </Form.Item>
        <Form.Item label="培训简述">
          <Input />
        </Form.Item>
        <Form.Item label="备注" colSpan={2}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="附件">
          <Upload>
            <Button>
              <UploadOutlined />
              上传文件
            </Button>
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入姓名',
    '2': '请输入身份证号',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select
            onSelect={e => setPlaceHolder(holder[e])}
            style={{ width: 100 }}
          >
            <Select.Option value="1">姓名</Select.Option>
            <Select.Option value="2">身份证号</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
