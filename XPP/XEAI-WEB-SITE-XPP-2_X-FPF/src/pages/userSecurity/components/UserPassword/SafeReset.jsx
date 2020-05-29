/**
 * @module 用户安全密码管理-重置
 */
import { useState } from 'react';
import { ButtonModal, Form } from 'lanlinker';
import { Tabs, Steps, Button, Result } from 'antd';

import phoneForm from './forms/phone';
import emailForm from './forms/email';
import securityForm from './forms/security';
import stepSafeForm from './forms/stepSafe';

const TAB_LIST = ['手机验证', '邮箱验证', '密保验证'];
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

export default ({ modalStyle }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTab, setCurrentTab] = useState(TAB_LIST[0]);
  const [modal, setModal] = useState(false);
  const [formPhone] = Form.useForm();
  const [formEmail] = Form.useForm();
  const [formSecurity] = Form.useForm();
  const [formStepSafe] = Form.useForm();

  return (
    <ButtonModal
      title="用户安全密码重置"
      {...modalStyle}
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 400,
      }}
      buttonProps={{
        text: '重置',
        type: 'link',
        onClick() {
          setModal(true);
        },
      }}
      visible={modal}
      onCancel={() => setModal(false)}
      footer={
        <>
          {currentStep === 0 && (
            <Button
              type="primary"
              onClick={async () => {
                switch (currentTab) {
                  case TAB_LIST[0]: {
                    const res = await formPhone.validateFields();
                    // 接口

                    setCurrentStep(current => current + 1);
                    break;
                  }
                  case TAB_LIST[1]: {
                    const res = await formEmail.validateFields();
                    // 接口

                    setCurrentStep(current => current + 1);
                    break;
                  }
                  case TAB_LIST[2]: {
                    const res = await formSecurity.validateFields();
                    // 接口

                    setCurrentStep(current => current + 1);
                    break;
                  }
                }
              }}
            >
              下一步
            </Button>
          )}
          {currentStep === 1 && (
            <Button
              type="primary"
              onClick={async () => {
                const res = await formStepSafe.validateFields();
                // 接口
                setCurrentStep(current => current + 1);
              }}
            >
              下一步
            </Button>
          )}
          {currentStep === 2 && (
            <Button type="primary" onClick={() => setModal(false)}>
              关闭
            </Button>
          )}
        </>
      }
      afterClose={() => {
        formPhone.resetFields();
        formEmail.resetFields();
        formSecurity.resetFields();
        setCurrentStep(0);
        setCurrentTab(TAB_LIST[0]);
      }}
    >
      <Steps current={currentStep} size="small" style={{ margin: '10px auto', width: '80%' }}>
        <Steps.Step title="选择验证方式"></Steps.Step>
        <Steps.Step title="填写新安全密码"></Steps.Step>
        <Steps.Step title="完成"></Steps.Step>
      </Steps>
      {currentStep === 0 && (
        <Tabs
          size="large"
          style={{ width: 500 }}
          activeKey={currentTab}
          onChange={key => setCurrentTab(key)}
        >
          <Tabs.TabPane tab={TAB_LIST[0]} key={TAB_LIST[0]} forceRender>
            <Form form={formPhone} configForm={phoneForm} {...layout}></Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab={TAB_LIST[1]} key={TAB_LIST[1]} forceRender>
            <Form form={formEmail} configForm={emailForm} {...layout}></Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab={TAB_LIST[2]} key={TAB_LIST[2]} forceRender>
            <Form form={formSecurity} configForm={securityForm} {...layout}></Form>
          </Tabs.TabPane>
        </Tabs>
      )}
      {currentStep === 1 && (
        <Form
          form={formStepSafe}
          configForm={stepSafeForm}
          {...layout}
          style={{ marginTop: 30 }}
        ></Form>
      )}
      {currentStep === 2 && <Result status="success" title="操作成功!"></Result>}
    </ButtonModal>
  );
};
