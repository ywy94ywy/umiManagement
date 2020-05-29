/**
 * @module 用户密码管理
 */
import { ButtonModal, Form } from 'lanlinker';
import { message } from 'antd';
import ListWrapper from '../ListWrapper';
import loginForm from './forms/login';
import safeForm from './forms/safe';
import SafeReset from './SafeReset';
import styles from '../style.less';

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱</span>,
};

const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
const modalStyle = { width: 700, bodyStyle: { minHeight: 300 } };

export default () => {
  const [formLogin] = Form.useForm();
  const [formSafe] = Form.useForm();

  const data = [
    {
      title: '用户登录密码管理',
      description: <>当前密码强度：{passwordStrength.strong}</>, // todo 这里的样式怎控制的 //todo 动态
      actions: [
        <ButtonModal
          title="用户登录密码修改"
          afterClose={() => {
            formLogin.resetFields();
          }}
          {...modalStyle}
          buttonProps={{
            text: '修改',
            type: 'link',
          }}
          onOk={async (e, close) => {
            const res = await formLogin.validateFields();

            // 提交接口

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
            {...modalStyle}
            buttonProps={{
              text: '修改',
              type: 'link',
            }}
            afterClose={() => {
              formSafe.resetFields();
            }}
            onOk={async (e, close) => {
              const res = await formSafe.validateFields();
              // 提交接口

              close();
              message.success('用户安全密码修改成功！');
            }}
          >
            <Form form={formSafe} configForm={safeForm} {...layout} className={styles.form}></Form>
          </ButtonModal>
          <SafeReset modalStyle={modalStyle} />
        </>,
      ],
    },
  ];
  return <ListWrapper data={data} />;
};
