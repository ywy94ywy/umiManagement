/**
 * @module 用户密保问题管理
 */
import { useState } from 'react';
import { Form, ButtonModal } from 'lanlinker';
import { Button, Steps, Result, message } from 'antd';
import { useRequest } from 'umi';
import { questionForm0, questionForm1, questionForm2 } from './forms/questions';
import { validateSafePassword } from '../../services';
import { getUserId } from '@/utils';
import styles from '../style.less';

export default ({ modalStyle, layout }) => {
  const userId = getUserId();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [modal, setModal] = useState(false);
  const validateSafePasswordRequest = useRequest(validateSafePassword, {
    onSuccess() {
      setCurrentQuestion(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });
  const [formQuestion0] = Form.useForm();
  const [formQuestion1] = Form.useForm();
  const [formQuestion2] = Form.useForm();

  return (
    <ButtonModal
      buttonProps={{
        text: '设置',
        type: 'link',
        onClick() {
          setModal(true);
        },
      }}
      title="用户密保问题修改"
      {...modalStyle}
      visible={modal}
      onCancel={() => {
        setModal(false);
      }}
      afterClose={() => {
        setCurrentQuestion(0);
      }}
      footer={
        <>
          {currentQuestion === 0 && (
            <Next
              loading={validateSafePasswordRequest.loading}
              onClick={async () => {
                const res = await formQuestion0.validateFields();
                validateSafePasswordRequest.run({ userId, ...res });
              }}
            />
          )}
          {currentQuestion === 1 && (
            <>
              <Prev
                onClick={async () => {
                  formQuestion1.resetFields();
                  setCurrentQuestion(c => c - 1);
                }}
              />
              <Next
                onClick={async () => {
                  const res = await formQuestion1.validateFields();

                  setCurrentQuestion(c => c + 1);
                }}
              />
            </>
          )}
          {currentQuestion === 2 && (
            <>
              <Prev
                onClick={async () => {
                  formQuestion2.resetFields();
                  setCurrentQuestion(c => c - 1);
                }}
              />
              <Next
                onClick={async () => {
                  const res = await formQuestion2.validateFields();

                  setCurrentQuestion(c => c + 1);
                }}
              />
            </>
          )}
          {currentQuestion === 3 && (
            <Button
              type="primary"
              onClick={() => {
                setModal(false);
              }}
            >
              关闭
            </Button>
          )}
        </>
      }
    >
      <div className={styles.content}>
        <Steps current={currentQuestion} size="small">
          <Steps.Step title="验证安全密码" />
          <Steps.Step title="填写新密保问题" />
          <Steps.Step title="确认新密保问题" />
          <Steps.Step title="完成" />
        </Steps>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400,
          }}
        >
          {currentQuestion === 0 && (
            <Form
              form={formQuestion0}
              configForm={questionForm0}
              {...layout}
              style={{ width: '100%' }}
            />
          )}
          {currentQuestion === 1 && (
            <Form form={formQuestion1} configForm={questionForm1} {...layout} />
          )}
          {currentQuestion === 2 && (
            <Form form={formQuestion2} configForm={questionForm2} {...layout} />
          )}
          {currentQuestion === 3 && (
            <Result status="success" title="操作成功" />
          )}
        </div>
      </div>
    </ButtonModal>
  );
};

const Prev = props => {
  return <Button {...props}>上一步</Button>;
};

const Next = props => {
  return (
    <Button type="primary" {...props}>
      下一步
    </Button>
  );
};
