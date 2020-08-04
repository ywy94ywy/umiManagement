/**
 * @module 用户密保问题管理
 */
import { useState } from 'react';
import { Modal, Form } from 'lanlinker';
import { Button, message, Steps } from 'antd';
import { useRequest } from 'umi';
import { getUserId } from '@/utils';
import { validateSafePassword, confirmQuestions } from '../../../services';
import Content from './Content';

export default ({ modalStyle, layout }) => {
  const userId = getUserId();
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [validateForm] = Form.useForm();
  const [sercurityForm] = Form.useForm();
  const [sercurityDate, setSercurityDate] = useState();
  const [confirmForm] = Form.useForm();
  const validateSafePasswordRequest = useRequest(validateSafePassword, {
    onSuccess() {
      setCurrent(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });
  const confirmQuestionsRequest = useRequest(confirmQuestions, {
    onSuccess() {
      setCurrent(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
    manual: true,
  });

  const Footer = () => {
    switch (current) {
      case 0:
        return (
          <Next
            loading={validateSafePasswordRequest.loading}
            onClick={async () => {
              const res = await validateForm.validateFields();
              validateSafePasswordRequest.run({ userId, ...res });
            }}
          />
        );
      case 1:
        return (
          <>
            <Prev
              onClick={async () => {
                validateForm.resetFields();
                sercurityForm.resetFields();
                setCurrent(c => c - 1);
              }}
            />
            <Next
              onClick={async () => {
                const res = await sercurityForm.validateFields();
                setSercurityDate(res);
                setCurrent(c => c + 1);
              }}
            />
          </>
        );
      case 2:
        return (
          <>
            <Prev
              onClick={async () => {
                sercurityForm.resetFields();
                confirmForm.resetFields();
                setCurrent(c => c - 1);
              }}
            />
            <Next
              onClick={async () => {
                const res = await confirmForm.validateFields();
                const data = [];
                data.push({
                  userProtectOrderCode: 1,
                  userProtectQuestionId: res[1],
                  userProtectAnswer: res[2],
                });
                data.push({
                  userProtectOrderCode: 2,
                  userProtectQuestionId: res[3],
                  userProtectAnswer: res[4],
                });
                data.push({
                  userProtectOrderCode: 3,
                  userProtectQuestionId: res[5],
                  userProtectAnswer: res[6],
                });

                confirmQuestionsRequest.run({
                  userId,
                  UserSelfExtendAccountProtectCatalogBO: data,
                });
              }}
            />
          </>
        );
      case 3:
        return (
          <>
            <Button
              type="primary"
              onClick={() => {
                setModal(false);
              }}
            >
              关闭
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button type="link" onClick={() => setModal(true)}>
        设置
      </Button>
      <Modal
        title="用户密保问题修改"
        {...modalStyle}
        visible={modal}
        afterClose={() => {
          setSercurityDate();
          setCurrent(0);
        }}
        destroyOnClose
        onCancel={() => {
          setModal(false);
        }}
        footer={<Footer />}
      >
        <Steps current={current} size="small" style={{ marginBottom: 30 }}>
          <Steps.Step title="验证安全密码" />
          <Steps.Step title="填写新密保问题" />
          <Steps.Step title="确认新密保问题" />
          <Steps.Step title="完成" />
        </Steps>
        <Content
          current={current}
          form1={validateForm}
          form2={sercurityForm}
          form3={confirmForm}
          sercurityDate={sercurityDate}
          layout={layout}
        />
      </Modal>
    </>
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
