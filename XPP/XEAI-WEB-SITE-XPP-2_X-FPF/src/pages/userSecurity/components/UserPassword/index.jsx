/**
 * @module 用户密码管理
 */
import { useState } from 'react';
import { Form, Modal } from 'lanlinker';
import { message, Button } from 'antd';
import { useRequest } from 'umi';
import { getUserId } from '@/utils';
import ListWrapper from '../ListWrapper';
import loginForm from './forms/login';
import safeForm from './forms/safe';
import SafeReset from './SafeReset';
import { updateLoginPassword, updateSafePassword } from '../../services';
import styles from '../style.less';

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};
const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
const modalStyle = { width: 700, bodyStyle: { minHeight: 300 } };

export default () => {
  const data = [loginList(), safeList()];
  return <ListWrapper data={data} />;
};

const loginList = () => {
  const userId = getUserId();

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { run, loading } = useRequest(a => updateLoginPassword(a), {
    manual: true,
    onSuccess(res) {
      message.success('用户登录密码修改成功！');
      setVisible(false);
    },
    onError(err) {
      message.error(err.message);
    },
  });

  return {
    title: '用户登录密码管理',
    description: <>当前密码强度：{passwordStrength.strong}</>, // todo 这里的样式怎控制的 //todo 动态
    actions: [
      <>
        <Button type="link" onClick={() => setVisible(true)} loading={loading}>
          修改
        </Button>
        <Modal
          title="用户登录密码修改"
          visible={visible}
          onCancel={() => setVisible(false)}
          afterClose={() => {
            form.resetFields();
          }}
          onOk={async () => {
            const res = await form.validateFields();
            const params = {
              userId,
              sourceUserLoginPassword: res.sourceUserLoginPassword,
              targetUserLoginPassword: res.targetUserLoginPassword,
            };
            run(params);
          }}
          {...modalStyle}
        >
          <Form
            form={form}
            configForm={loginForm}
            {...layout}
            className={styles.form}
            validateTrigger="onBlur"
          />
        </Modal>
      </>,
    ],
  };
};

const safeList = () => {
  const userId = getUserId();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { run, loading } = useRequest(a => updateSafePassword(a), {
    manual: true,
    onSuccess(res) {
      message.success('用户安全密码修改成功！');
      setVisible(false);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  return {
    title: '用户安全密码管理',
    description: '安全密码限定6位字符',
    actions: [
      <>
        <Button type="link" onClick={() => setVisible(true)} loading={loading}>
          修改
        </Button>
        <Modal
          title="用户安全密码修改"
          visible={visible}
          onCancel={() => setVisible(false)}
          afterClose={() => {
            form.resetFields();
          }}
          onOk={async () => {
            const res = await form.validateFields();
            const params = {
              userId,
              userSafePasswordSource: res.userSafePasswordSource,
              userSafePasswordTarget: res.userSafePasswordTarget,
            };
            run(params);
          }}
          {...modalStyle}
        >
          <Form
            form={form}
            configForm={safeForm}
            {...layout}
            className={styles.form}
            validateTrigger="onBlur"
          />
        </Modal>
        <SafeReset modalStyle={modalStyle} />
      </>,
    ],
  };
};
