/**
 * @page 忘记密码
 */
import { useState } from 'react';
import { Steps, Button, Result } from 'antd';
import { history } from 'umi';
import Account from './components/Account';
import Message from './components/Message';
import Password from './components/Password';
import styles from './style.less';

const { Step } = Steps;

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.password}>
      <h3>忘记密码</h3>
      <Steps current={current} size="small" className={styles.steps}>
        <Step title="输入用户帐号" />
        <Step title="安全信息验证" />
        <Step title="填写新密码" />
        <Step title="完成密码重置" />
      </Steps>
      <FormSwitcher current={current} setCurrent={setCurrent} />
    </div>
  );
};

const FormSwitcher = ({ current, setCurrent }) => {
  const [account, setAccount] = useState();

  const formProps = {
    colon: false,
    style: { width: '70%' },
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    validateTrigger: 'onBlur',
  };

  switch (current) {
    case 0:
      return (
        <Account
          formProps={formProps}
          setCurrent={setCurrent}
          setAccount={setAccount}
        />
      );
    case 1:
      return (
        <Message
          formProps={formProps}
          setCurrent={setCurrent}
          account={account}
        />
      );
    case 2:
      return (
        <Password
          formProps={formProps}
          setCurrent={setCurrent}
          account={account}
        />
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
              key="goBack"
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
