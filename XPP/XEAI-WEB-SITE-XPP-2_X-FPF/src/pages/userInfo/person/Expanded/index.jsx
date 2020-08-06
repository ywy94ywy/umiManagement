/**
 * @module 扩展信息（个人）
 */
import { useState } from 'react';
import { Form } from 'lanlinker';
import { Input, Select, message } from 'antd';
import { useRequest } from 'umi';
import {
  MOBILE_VALIDATOR,
  EMAIL_VALIDATOR,
  EMAIL_LENGTH_VALIDATOR,
  UNIT_VALIDATOR,
  PROFESSION_VALIDATOR,
} from '@/config/reg';
import { fetchPersonExpanded, updatePersonExpanded } from '../../servers';
import EditForm from '../../components/EditForm';

export default ({ layout }) => {
  const [expandedForm] = Form.useForm();
  const [disabled, setDisabled] = useState(true);
  useRequest(fetchPersonExpanded, {
    onSuccess(res) {
      expandedForm.setFieldsValue(res);
    },
  });
  const updatePersonExpandedRequest = useRequest(updatePersonExpanded, {
    manual: true,
    onSuccess() {
      message.success('用户信息保存成功！');
      setDisabled(true);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  
  return (
    <EditForm
      disabled={disabled}
      setDisabled={setDisabled}
      onSave={async () => {
        const data = await expandedForm.validateFields();
        updatePersonExpandedRequest.run(data);
      }}
      onCancel={() => {
        setDisabled(true);
      }}
    >
      <Form
        {...layout}
        columns={2}
        style={{ width: 800, margin: '0 auto' }}
        form={expandedForm}
        validateTrigger="onBlur"
      >
        <Form.Item label="用户性别" name="sex">
          <Select disabled={disabled}>
            <Select.Option value="1">男</Select.Option>
            <Select.Option value="2">女</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item></Form.Item>
        <Form.Item
          label="工作单位"
          name="workUnitName"
          rules={[UNIT_VALIDATOR]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item
          label="工作邮箱"
          name="workEmail"
          rules={[EMAIL_VALIDATOR, EMAIL_LENGTH_VALIDATOR]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item
          label="工作手机"
          name="workMobile"
          rules={[MOBILE_VALIDATOR]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item
          label="用户职业"
          name="profession"
          rules={[PROFESSION_VALIDATOR]}
        >
          <Input disabled={disabled} />
        </Form.Item>
      </Form>
    </EditForm>
  );
};
