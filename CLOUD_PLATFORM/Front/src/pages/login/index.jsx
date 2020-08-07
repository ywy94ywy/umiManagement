/**
 * @page 登录
 */
import { useEffect } from 'react';
import { Input, Button, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRequest, history } from 'umi';
import { fetchLogin } from './services.js';
import { saveToken, getErrorMessage, removeErrorMessage } from '@/utils';
import { PASSWORD_VALIDATOR } from '@/config/reg';
import header from './header.png';
import qrcode from './qrcode.png';
import styles from './style.less';

export default () => {
  const [form] = Form.useForm();
  const { loading, run } = useRequest(fetchLogin, {
    manual: true,
    onSuccess(res) {
      //  存储token（跨子项目使用）
      saveToken(res.token);

      //  重定向或直接跳转
      const redirect = window.location.href.match(/\?redirect=(\S*)/);
      if (redirect) {
        window.location.href = decodeURIComponent(redirect[1]);
      } else {
        history.push('/home');
      }
    },
    onError(err) {
      message.error(err.message);
    },
  });

  useEffect(() => {
    const err = getErrorMessage();
    if (err) {
      message.error(err);
      removeErrorMessage();
    }
  }, []);

  // 提交表单
  const onFinish = value => {
    run(value);
  };

  return (
    <div className={styles.login}>
      <section>
        <header>
          <img src={header} alt="logo" />
        </header>
        <Form
          form={form}
          onFinish={onFinish}
          className={styles.log}
          validateTrigger="onBlur"
        >
          <Form.Item
            name="userName"
            className={styles.item}
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            className={styles.item}
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              PASSWORD_VALIDATOR,
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item noStyle>
            <Button
              loading={loading}
              block
              type="primary"
              className={styles.btn}
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.actions}>
          <span
            onClick={() => {
              history.push('/user/register');
            }}
          >
            立即注册
          </span>
          <span
            onClick={() => {
              history.push('/user/password');
            }}
          >
            忘记密码
          </span>
        </div>
        <div className={styles.code}>
          <span style={{ marginBottom: 5 }}>扫码下载app</span>
          <img src={qrcode} alt="qrcode" />
        </div>
      </section>
      <footer>
        Copyright @Lanlinker Information Technology (Shanghai) Co.,Ltd.All
        Rights Reserved
      </footer>
    </div>
  );
};
