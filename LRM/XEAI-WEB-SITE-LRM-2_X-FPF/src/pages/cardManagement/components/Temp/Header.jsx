import { useState, useEffect } from 'react';
import { ButtonModal, Form } from 'lanlinker';
import { Row, Button, Input, Select, Form as AntdForm } from 'antd';
import configForm from './form';

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      d: ['宿舍区北门'],
    });
  }, []);

  const formList = configForm();
  formList.splice(1, 0, { component: null }); // 添加占位符（布局用）
  formList.splice(5, 0, { component: null }); // 添加占位符（布局用）

  return (
    <Row justify="space-between">
      <ButtonModal
        title="发放临时卡"
        width={800}
        centered
        buttonProps={{ text: '发放临时卡', type: 'primary' }}
        onOk={async () => {
          const res = await form.validateFields();
          console.log(res);
        }}
      >
        <Form
          form={form}
          columns={2}
          configForm={formList}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: '80%', margin: '0 auto' }}
        />
      </ButtonModal>
      <AntdForm layout="inline" initialValues={{ a: '1', b: '1' }}>
        <AntdForm.Item label="发卡状态" name="b">
          <Select>
            <Select.Option value="1">全部人员</Select.Option>
            <Select.Option value="2">已发卡</Select.Option>
            <Select.Option value="3">已退卡</Select.Option>
          </Select>
        </AntdForm.Item>
        <AntdForm.Item>
          <InputWrapper />
        </AntdForm.Item>
        <AntdForm.Item>
          <Button type="primary">查询</Button>
        </AntdForm.Item>
        <AntdForm.Item>
          <Button>重置</Button>
        </AntdForm.Item>
      </AntdForm>
    </Row>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入姓名',
    '2': '请输入卡号',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <AntdForm.Item noStyle name="a">
          <Select onSelect={e => setPlaceHolder(holder[e])}>
            <Select.Option value="1">姓名</Select.Option>
            <Select.Option value="2">卡号</Select.Option>
          </Select>
        </AntdForm.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
