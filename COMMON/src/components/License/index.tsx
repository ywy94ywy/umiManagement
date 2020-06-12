/**
 * @module 营业执照
 * @todo 字段动态化及字段处理
 */
import React from 'react';
import { Form, Input, Select, Space, DatePicker, ConfigProvider } from 'antd';
import { FormProps } from 'antd/es/form';
import classNames from 'classnames';
import { STATIC_IMAGE } from '../../config';
import moment from 'moment';
import styles from './style.less';

interface LicenseProps extends FormProps {
  editable: boolean;
  disabled: boolean;
}

const validate = {
  validateFirst: true,
  validateTrigger: 'onSubmit',
  rules: [{ required: true }],
};

const validateMessages = {
  required: "请填写'${label}'",
};

const License: React.FC<LicenseProps> = ({
  className,
  form,
  disabled = true,
  editable = false,
  ...props
}) => {
  return (
    <ConfigProvider form={{ validateMessages }}>
      <Form
        form={form}
        colon={false}
        validateMessages={validateMessages}
        className={classNames(styles.license, className)}
        labelCol={{ flex: '0 0 110px' }}
        initialValues={{ d: '1' }}
        onFinishFailed={({ values, errorFields, outOfDate }) => {
          console.log(values, errorFields, outOfDate);
        }}
        {...props}
      >
        <img src={STATIC_IMAGE + '/license/license_1.png'} alt="" />
        <div
          className={styles.stretch}
          style={{
            background: `url(${STATIC_IMAGE}/license/license_2.png) top/contain`,
          }}
        >
          <Form.Item
            name="a"
            label="统一社会信用代码"
            {...validate}
            {...rightLayout}
          >
            {editable ? <Input disabled={disabled} /> : <Text />}
          </Form.Item>
          <Form.Item
            name="b"
            label="营业执照注册号"
            {...validate}
            {...rightLayout}
          >
            {editable ? <Input disabled={disabled} /> : <Text />}
          </Form.Item>
          <Form.Item name="c" label="名称" {...validate}>
            {editable ? <Input disabled={disabled} /> : <Text />}
          </Form.Item>
          <Form.Item name="d" label="类型" {...validate}>
            {editable ? (
              <Select disabled={disabled}>
                <Select.Option value="1">有限责任公司</Select.Option>
                <Select.Option value="2">股份有限责任公司</Select.Option>
                <Select.Option value="3">个人独资企业</Select.Option>
                <Select.Option value="4">合伙企业</Select.Option>
              </Select>
            ) : (
              <Text />
            )}
          </Form.Item>
          <Form.Item name="e" label="住所" {...validate}>
            {editable ? <Input disabled={disabled} /> : <Text />}
          </Form.Item>
          <Form.Item name="f" label="法定代表人" {...validate}>
            {editable ? <Input disabled={disabled} /> : <Text />}
          </Form.Item>
          <Form.Item label="注册资本" {...validate}>
            <Space>
              <span>人民币</span>
              <Form.Item label="注册资本" name="g" noStyle {...validate}>
                {editable ? <Input disabled={disabled} /> : <Text />}
              </Form.Item>
              <span>万元整</span>
            </Space>
          </Form.Item>
          <Form.Item name="h" label="成立日期" {...validate}>
            {editable ? (
              <DatePicker disabled={disabled} style={{ width: '100%' }} />
            ) : (
              <Text />
            )}
          </Form.Item>
          <Form.Item name="i" label="营业期限" {...validate}>
            {editable ? (
              <DatePicker.RangePicker
                disabled={disabled}
                style={{ width: '100%' }}
              />
            ) : (
              <Text />
            )}
          </Form.Item>
          <Form.Item name="j" label="经营范围" {...validate}>
            {editable ? (
              <Input.TextArea
                disabled={disabled}
                autoSize={{ minRows: 3, maxRows: 3 }}
              />
            ) : (
              <Text className={styles.textArea} />
            )}
          </Form.Item>
          <Form.Item name="k" label="登记机关" {...validate} {...rightLayout}>
            {editable ? <Input disabled={disabled} /> : <Text />}
          </Form.Item>
          <Form.Item name="l" label="登记时间" {...validate} {...rightLayout}>
            {editable ? (
              <DatePicker disabled={disabled} style={{ width: '100%' }} />
            ) : (
              <Text />
            )}
          </Form.Item>
        </div>
        <img src={STATIC_IMAGE + '/license/license_3.png'} alt="" />
      </Form>
    </ConfigProvider>
  );
};

const Text: React.FC<{
  value?: any;
  className?: string;
}> = ({ value, ...props }) => {
  const type = Object.prototype.toString.call(value);
  let v = '';

  switch (type) {
    case '[object Object]':
      v = moment(value).format('YYYY-MM-DD');
      break;
    case '[object Array]':
      v =
        moment(value[0]).format('YYYY-MM-DD') +
        ' ~ ' +
        moment(value[1]).format('YYYY-MM-DD');
      break;
    case '[object String]':
      v = value as string;
      break;
    default:
      break;
  }

  return (
    <div title={v} className={styles.ellip} {...props}>
      {v}
    </div>
  );
};

const rightLayout = {
  labelCol: { span: 15 },
  wrapperCol: { span: 9 },
};

export default License;
