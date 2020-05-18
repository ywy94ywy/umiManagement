import React from 'react';
import { Form, Input } from 'antd';
import classNames from 'classnames';
import license from './license.png';
import styles from './style.less';

export default ({ className, form, editable, ...props }) => {
  return (
    <Form form={form} {...formLayout} className={classNames(styles.license, className)} {...props}>
      <img src={license} alt="" />
      <div className={styles.content}>
        <Form.Item name="a" label="统一社会信用代码" required {...topLayout}>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="b" label="营业执照注册号：" required {...topLayout}>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="c" label="名称" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="d" label="类型" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="e" label="住所" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="f" label="法定代表人" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="g" label="注册资本" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="h" label="成立日期" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="i" label="营业期限" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="j" label="经营范围" required wrapperCol={{ span: 20 }}>
          <Input.TextArea disabled={!editable} className={styles.textArea}></Input.TextArea>
        </Form.Item>
        <Form.Item name="k" label="登记机关" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
        <Form.Item name="l" label="登记时间" required>
          <Input disabled={!editable}></Input>
        </Form.Item>
      </div>
    </Form>
  );
};

const topLayout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 8 },
};
const formLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
