/**
 * @page 忘记密码
 */
import { useState } from 'react';
import { SafeInput } from 'lanlinker';
import CountDownInput from '@/components/CountDownInput';
import SecretFormItem from '@/components/SecretFormItem';
import { Steps, Form, Input, Row, Button, Result } from 'antd';
import { history } from 'umi';
import styles from './style.less';
const { Step } = Steps;

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.password}>
      <h3>忘记密码</h3>
      <Form colon={false} labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
        <Steps current={current} size="small" className={styles.steps}>
          <Step title="输入用户帐号" />
          <Step title="安全信息验证"></Step>
          <Step title="填写新密码" />
          <Step title="完成密码重置" />
        </Steps>
        <Switcher current={current} setCurrent={setCurrent}></Switcher>
      </Form>
    </div>
  );
};

const Switcher = ({ current, setCurrent }) => {
  const Prev = ({ ...props }) => (
    <Button type="primary" {...props}>
      上一步
    </Button>
  );
  const Next = ({ ...props }) => (
    <Button type="primary" {...props}>
      下一步
    </Button>
  );

  switch (current) {
    case 0:
      return (
        <>
          <Form.Item name="a" label="用户帐号">
            <Input placeholder="请输入手机帐号/邮箱帐号"></Input>
          </Form.Item>
          <Row justify="end">
            <Next onClick={() => setCurrent(c => ++c)} />
          </Row>
        </>
      );
    case 1:
      return (
        <>
          <Form.Item name="e" label="手机帐号">
            <Input placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item name="f" label="短信验证">
            <CountDownInput placeholder="请输入手机短信验证码"></CountDownInput>
          </Form.Item>
          <Form.Item name="G" label="邮箱帐号">
            <Input placeholder="请输入电子邮箱"></Input>
          </Form.Item>
          <Form.Item name="H" label="邮箱验证">
            <CountDownInput placeholder="请输入邮箱验证码"></CountDownInput>
          </Form.Item>
          <Row justify="space-between">
            <Prev onClick={() => setCurrent(c => --c)} />
            <Next onClick={() => setCurrent(c => ++c)} />
          </Row>
        </>
      );
    case 2:
      return (
        <>
          <Form.Item name="G" label="新登录密码">
            <Input placeholder="请输入登录密码"></Input>
          </Form.Item>
          <Form.Item name="H" label="登录密码确认">
            <Input placeholder="请重新输入登录密码"></Input>
          </Form.Item>
          <Row justify="space-between">
            <Prev onClick={() => setCurrent(c => --c)} />
            <Next onClick={() => setCurrent(c => ++c)} />
          </Row>
        </>
      );
    case 3:
      return (
        <Result
          status="success"
          title="恭喜您，密码已重置成功，请使用新密码登录！"
          extra={[
            <Button
              type="primary"
              onClick={() => {
                history.push('/login');
              }}
            >
              返回登录页
            </Button>,
          ]}
        />
      );

    default:
      return null;
  }
};
