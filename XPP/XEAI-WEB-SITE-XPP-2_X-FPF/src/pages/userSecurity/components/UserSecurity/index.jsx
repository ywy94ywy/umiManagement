/**
 * @module 用户密保管理
 */
import { Form, ButtonModal } from 'lanlinker';
import { message } from 'antd';
import ListWrapper from '../ListWrapper';
import phoneForm from './forms/phone';
import emailForm from './forms/email';
import SecurityQuestions from './SecurityQuestions';
import styles from '../style.less';

const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };
const modalStyle = { width: 700, bodyStyle: { minHeight: 300 } };

export default () => {
  const [formPhone] = Form.useForm();
  const [formEmail] = Form.useForm();

  const data = [
    {
      title: '用户密保问题管理',
      description: '未设置密保问题，密保问题可有效保护帐户安全', //todo 动态
      actions: [<SecurityQuestions modalStyle={modalStyle} layout={layout} />],
    },
    {
      title: '用户密保手机管理',
      description: '已绑定手机：138****8293', //todo 动态
      actions: [
        <ButtonModal
          title="用户密保手机修改"
          {...modalStyle}
          buttonProps={{
            text: '修改',
            type: 'link',
          }}
          afterClose={() => {
            formPhone.resetFields();
          }}
          onOk={async (e, close) => {
            const res = await formPhone.validateFields();
            // 接口
            close();
            message.success('用户密保手机修改成功！');
          }}
        >
          <Form form={formPhone} configForm={phoneForm} className={styles.form} {...layout}></Form>
        </ButtonModal>,
      ],
    },
    {
      title: '用户密保邮箱管理',
      description: '未绑定邮箱', //todo 动态
      actions: [
        <ButtonModal
          title="用户密保邮箱修改"
          {...modalStyle}
          buttonProps={{
            text: '绑定',
            type: 'link',
          }}
          afterClose={() => {
            formEmail.resetFields();
          }}
          onOk={async (e, close) => {
            const res = await formEmail.validateFields();

            // 提交接口
            close();
            message.success('用户密保邮箱修改成功！');
          }}
        >
          <Form form={formEmail} configForm={emailForm} className={styles.form} {...layout}></Form>
        </ButtonModal>,
      ],
    },
  ];

  return <ListWrapper data={data} />;
};
