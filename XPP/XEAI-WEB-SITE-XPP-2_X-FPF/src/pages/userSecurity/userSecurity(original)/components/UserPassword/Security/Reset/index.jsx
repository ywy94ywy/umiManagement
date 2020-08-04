/**
 * @module 用户安全密码管理-重置
 */
import { useState } from 'react';
import { Modal } from 'lanlinker';
import { Button, Form, message, Steps } from 'antd';
import { useRequest } from 'umi';
import { getUserId } from '@/utils';
import Content from './Content';
import {
  validateEmailCaptcha,
  validateMobileCaptcha,
  validateResetSecurity,
  updateSecurityPassword,
} from '@/pages/userSecurity/services';

const TAB_LIST = ['手机验证', '邮箱验证', '密保验证'];
const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export default ({ modalStyle }) => {
  const userId = getUserId();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTab, setCurrentTab] = useState(TAB_LIST[0]);
  const [phoneForm] = Form.useForm();
  const [emailForm] = Form.useForm();
  const [validateForm] = Form.useForm();
  const [sercurityForm] = Form.useForm();
  const [modal, setModal] = useState(false);
  const validateMobileCaptchaRequest = useRequest(validateMobileCaptcha, {
    manual: true,
    onSuccess() {
      setCurrentStep(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const validateEmailCaptchaRequest = useRequest(validateEmailCaptcha, {
    manual: true,
    onSuccess() {
      setCurrentStep(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const validateResetSecurityRequest = useRequest(validateResetSecurity, {
    manual: true,
    onSuccess() {
      setCurrentStep(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
  });
  const updateSecurityPasswordRequest = useRequest(updateSecurityPassword, {
    manual: true,
    onSuccess() {
      setCurrentStep(c => c + 1);
    },
    onError(err) {
      message.error(err.message);
    },
  });

  const Footer = () => {
    switch (currentStep) {
      case 0:
        return (
          <Next
            onClick={async () => {
              let res;
              switch (currentTab) {
                case TAB_LIST[0]:
                  res = await phoneForm.validateFields();
                  validateMobileCaptchaRequest.run(res);
                  break;
                case TAB_LIST[1]:
                  res = await emailForm.validateFields();
                  validateEmailCaptchaRequest.run(res);
                  break;
                case TAB_LIST[2]:
                  res = await validateForm.validateFields();
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

                  validateResetSecurityRequest.run({
                    userId,
                    UserSelfExtendAccountProtectCatalogBO: data,
                  });
                  break;
                default:
                  break;
              }
            }}
          />
        );
      case 1:
        return (
          <Next
            onClick={async () => {
              const res = await sercurityForm.validateFields();
              updateSecurityPasswordRequest.run(res.userSafePassword);
            }}
          />
        );
      case 2:
        return (
          <Button type="primary" onClick={() => setModal(false)}>
            关闭
          </Button>
        );
    }
  };

  return (
    <>
      <Button type="link" onClick={() => setModal(true)}>
        重置
      </Button>
      <Modal
        title="用户安全密码重置"
        visible={modal}
        destroyOnClose
        onCancel={() => setModal(false)}
        afterClose={() => {
          setCurrentTab(TAB_LIST[0]);
          setCurrentStep(0);
        }}
        footer={<Footer />}
        {...modalStyle}
      >
        <Steps
          current={currentStep}
          size="small"
          style={{ margin: '0px auto', width: '80%' }}
        >
          <Steps.Step title="选择验证方式"></Steps.Step>
          <Steps.Step title="填写新安全密码"></Steps.Step>
          <Steps.Step title="完成"></Steps.Step>
        </Steps>
        <Content
          currentStep={currentStep}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          phoneForm={phoneForm}
          emailForm={emailForm}
          validateForm={validateForm}
          sercurityForm={sercurityForm}
          layout={formLayout}
          TAB_LIST={TAB_LIST}
        />
      </Modal>
    </>
  );
};

// const Prev = props => {
//   return <Button {...props}>上一步</Button>;
// };

const Next = props => {
  return (
    <Button type="primary" {...props}>
      下一步
    </Button>
  );
};
