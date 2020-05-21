/**
 * @module 营业执照
 * @todo 字段动态化及字段处理
 * @todo 错误验证展示
 */
import React from 'react';
import { Form, Input, Select, Space } from 'antd';
import { FormProps } from 'antd/es/form';
import classNames from 'classnames';
import license from './license.png';
import styles from './style.less';

interface LicenseProps extends FormProps {
  editable: boolean;
  disabled: boolean;
}

const License: React.FC<LicenseProps> = ({
  className,
  form,
  disabled = true,
  editable = false,
  ...props
}) => {
  return (
    <Form
      form={form}
      colon={false}
      className={classNames(styles.license, className)}
      labelCol={{ flex: '0 0 120px' }}
      initialValues={{ d: '1' }}
      {...props}
    >
      <img src={license} alt="" />
      <div className={styles.content}>
        <Form.Item name="a" label="统一社会信用代码" required {...rightLayout}>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="b" label="营业执照注册号" required {...rightLayout}>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="c" label="名称" required>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="d" label="类型" required>
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
        <Form.Item name="e" label="住所" required>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="f" label="法定代表人" required>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item label="注册资本" required>
          <Space>
            <span>人民币</span>
            <Form.Item name="g" noStyle>
              {editable ? <Input disabled={disabled}></Input> : <Text />}
            </Form.Item>
            <span>万元整</span>
          </Space>
        </Form.Item>
        <Form.Item name="h" label="成立日期" required>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="i" label="营业期限" required>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="j" label="经营范围" required>
          {editable ? (
            <Input.TextArea
              disabled={disabled}
              className={styles.textArea}
              rows={3}
            ></Input.TextArea>
          ) : (
            <Text className={styles.textArea} />
          )}
        </Form.Item>
        <Form.Item name="k" label="登记机关" required {...rightLayout}>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
        <Form.Item name="l" label="登记时间" required {...rightLayout}>
          {editable ? <Input disabled={disabled}></Input> : <Text />}
        </Form.Item>
      </div>
    </Form>
  );
};

const Text: React.FC<{ value?: string; className?: string }> = ({
  value,
  ...props
}) => {
  return (
    <div title={value} {...props}>
      {value}
    </div>
  );
};

const rightLayout = {
  labelCol: { span: 15 },
  wrapperCol: { span: 9 },
};

export default License;
