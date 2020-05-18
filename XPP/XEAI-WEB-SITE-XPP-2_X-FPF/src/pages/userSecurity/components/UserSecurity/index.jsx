/**
 * @module 用户密保管理
 */
import { useState } from 'react';
import { Form, ButtonModal } from 'lanlinker';
import { Button, Steps, Result, message } from 'antd';
import ListWrapper from '../ListWrapper';
import { questionForm0, questionForm1, questionForm2 } from './forms/questions';
import phoneForm from './forms/phone';
import emailForm from './forms/email';
import classNames from 'classnames';
import styles from '../style.less';

const layout = { labelCol: { span: 9 }, wrapperCol: { span: 10 } };

export default () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [modal, setModal] = useState(false);
  const [formPhone] = Form.useForm();
  const [formEmail] = Form.useForm();

  const data = [
    {
      title: '用户密保问题管理',
      description: '未设置密保问题，密保问题可有效保护帐户安全',
      actions: [
        <ButtonModal
          buttonProps={{
            text: '设置',
            type: 'link',
            onClick() {
              setModal(true);
            },
          }}
          title="用户密保问题修改"
          width={700}
          visible={modal}
          onCancel={() => {
            setModal(false);
          }}
          afterClose={() => {
            setCurrentQuestion(0);
          }}
          footer={
            <CurrentFooter
              current={currentQuestion}
              setCurrent={setCurrentQuestion}
              onCancel={() => {
                setModal(false);
              }}
            />
          }
        >
          <div className={styles.content}>
            <Steps current={currentQuestion} size="small">
              <Steps.Step title="验证安全密码" />
              <Steps.Step title="填写新密保问题" />
              <Steps.Step title="确认新密保问题" />
              <Steps.Step title="完成" />
            </Steps>
            <CurrentStep current={currentQuestion}></CurrentStep>
          </div>
        </ButtonModal>,
      ],
    },
    {
      title: '用户密保手机管理',
      description: '已绑定手机：138****8293',
      actions: [
        <ButtonModal
          title="用户密保手机修改"
          width={700}
          buttonProps={{
            text: '修改',
            type: 'link',
          }}
          onOk={async (e, close) => {
            const res = await formPhone.validateFields();
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
      description: '未绑定邮箱',
      actions: [
        <ButtonModal
          title="用户密保邮箱修改"
          width={700}
          buttonProps={{
            text: '绑定',
            type: 'link',
          }}
          onOk={async (e, close) => {
            const res = await formEmail.validateFields();
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

const CurrentStep = ({ current }) => {
  switch (current) {
    case 0:
      return (
        <Form
          configForm={questionForm0}
          {...layout}
          className={classNames(styles.stepForm, styles.step1)}
        />
      );
    case 1:
      return <Form configForm={questionForm1} {...layout} className={styles.stepForm} />;
    case 2:
      return <Form configForm={questionForm2} {...layout} className={styles.stepForm} />;
    case 3:
      return (
        <div className={classNames(styles.stepForm, styles.step4)}>
          <Result status="success" title="操作成功" />
        </div>
      );
    default:
      break;
  }
};

const CurrentFooter = ({ current, setCurrent, onCancel }) => {
  const Prev = () => {
    return (
      <Button
        onClick={() => {
          setCurrent(s => s - 1);
        }}
      >
        上一步
      </Button>
    );
  };
  const Next = ({ onClick, ...props }) => {
    return (
      <Button
        type="primary"
        onClick={() => {
          onClick && onClick();
          setCurrent(s => s + 1);
        }}
        {...props}
      >
        下一步
      </Button>
    );
  };
  switch (current) {
    case 0:
      return <Next />;
    case 1:
      return (
        <>
          <Prev />
          <Next />
        </>
      );
    case 2:
      return (
        <>
          <Prev />
          <Next
            onClick={() => {
              setTimeout(() => {
                console.log('调用接口');
              }, 1000);
            }}
          />
        </>
      );
    case 3:
      return (
        <Button
          type="primary"
          onClick={() => {
            onCancel && onCancel();
          }}
        >
          关闭
        </Button>
      );
    default:
      return null;
  }
};
