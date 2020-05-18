/**
 * @module 用户密码管理
 * @todo destroyOnClose???
 * @todo tabs
 */
import ListWrapper from '../ListWrapper';
import { ButtonModal, Form } from 'lanlinker';
import { Tabs, message } from 'antd';
import loginForm from './forms/login';
import phoneForm from './forms/phone';
import emailForm from './forms/email';
import securityForm from './forms/security';
import safeForm from './forms/safe';
import styles from '../style.less';

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};

const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };

export default () => {
  const [formLogin] = Form.useForm();
  // const [formReset] = Form.useForm();
  const [formSafe] = Form.useForm();

  const data = [
    {
      title: '用户登录密码管理',
      description: <>当前密码强度：{passwordStrength.strong}</>,
      actions: [
        <ButtonModal
          title="用户登录密码修改"
          width={700}
          buttonProps={{
            text: '修改',
            type: 'link',
          }}
          onOk={async (e, close) => {
            const res = await formLogin.validateFields();
            close();
            message.success('用户登录密码修改成功！');
          }}
        >
          <Form form={formLogin} configForm={loginForm} {...layout} className={styles.form}></Form>
        </ButtonModal>,
      ],
    },
    {
      title: '用户安全密码管理',
      description: '安全密码限定6位字符',
      actions: [
        <>
          <ButtonModal
            title="用户安全密码修改"
            width={700}
            buttonProps={{
              text: '修改',
              type: 'link',
            }}
            onOk={async (e, close) => {
              const res = await formSafe.validateFields();
              close();
              message.success('用户安全密码修改成功！');
            }}
          >
            <Form form={formSafe} configForm={safeForm} {...layout} className={styles.form}></Form>
          </ButtonModal>
          <ButtonModal
            title="用户安全密码重置"
            width={700}
            buttonProps={{
              text: '重置',
              type: 'link',
            }}
            onOk={async (e, close) => {
              // const res = await safeForm.validateFields();
              close();
              // message.success('用户安全密码重置修改成功！');
            }}
          >
            <Tabs size="large" className={styles.tab}>
              <Tabs.TabPane tab="手机验证" key="手机验证">
                <Form configForm={phoneForm} {...layout}></Form>
              </Tabs.TabPane>
              <Tabs.TabPane tab="邮箱验证" key="邮箱验证">
                <Form configForm={emailForm} {...layout}></Form>
              </Tabs.TabPane>
              <Tabs.TabPane tab="密保验证" key="密保验证">
                <Form configForm={securityForm} {...layout}></Form>
              </Tabs.TabPane>
            </Tabs>
          </ButtonModal>
        </>,
      ],
    },
  ];
  return <ListWrapper data={data} />;
};
