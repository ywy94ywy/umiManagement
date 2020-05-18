/**
 * @module 立即注册
 * @todo 字段验证
 */
import React, { useState } from 'react';
import { SafeInput, ButtonModal } from 'lanlinker';
import CountDownInput from '@/components/CountDownInput';
import { Tabs, Input, Button, Checkbox, Form, message } from 'antd';
import styles from './style.less';

const TABS = ['手机注册', '邮箱注册'];

export default () => {
  const [tab, setTab] = useState(TABS[0]);
  const [form] = Form.useForm();

  const onSubmit = async () => {
    let names = [];
    tab === TABS[0] && (names = ['a', 'b', 'c', 'd1', 'd2', 'e', 'e2', 'agree']);
    tab === TABS[1] && (names = ['a2', 'b2', 'c', 'd1', 'd2', 'e', 'e2', 'agree']);
    const values = await form.validateFields(names);
    console.log(values);
  };

  return (
    <Form
      form={form}
      colon={false}
      className={styles.register}
      hideRequiredMark
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
    >
      <Tabs activekey={tab} onChange={key => setTab(key)} size="large">
        <Tabs.TabPane tab={TABS[0]} key={TABS[0]}>
          <Form.Item
            name="a"
            label="手机账号"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
            ]}
          >
            <Input placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item
            name="b"
            label="短信验证"
            rules={[
              {
                required: true,
                message: '请输入手机短信验证码',
              },
            ]}
          >
            <CountDownInput
              placeholder="请输入手机短信验证码"
              buttonProps={{
                onClick: async () => {
                  // const res = await request()
                  message.success('验证码已发送，请注意查收！');
                },
              }}
            ></CountDownInput>
          </Form.Item>
        </Tabs.TabPane>
        <Tabs.TabPane tab={TABS[1]} key={TABS[1]}>
          <Form.Item
            name="a2"
            label="邮箱账号"
            rules={[
              {
                required: true,
                message: '请输入电子邮箱',
              },
            ]}
          >
            <Input placeholder="请输入电子邮箱"></Input>
          </Form.Item>
          <Form.Item
            name="b2"
            label="邮箱验证"
            rules={[
              {
                required: true,
                message: '请输入邮箱验证码',
              },
            ]}
          >
            <CountDownInput
              placeholder="请输入邮箱验证码"
              buttonProps={{
                onClick() {
                  message.success('验证码已发送，请注意查收！');
                },
              }}
            ></CountDownInput>
          </Form.Item>
        </Tabs.TabPane>
      </Tabs>
      <Form.Item
        name="c"
        label="昵称账号"
        rules={[
          {
            required: true,
            message: '请输入昵称账号',
          },
        ]}
      >
        <Input placeholder="请输入昵称账号"></Input>
      </Form.Item>
      <Form.Item
        name="d1"
        label="登录密码"
        rules={[
          {
            required: true,
            message: '请输入登录密码',
          },
        ]}
      >
        <Input placeholder="请输入登录密码"></Input>
      </Form.Item>
      <Form.Item
        name="d2"
        label="确认密码"
        rules={[
          {
            required: true,
            message: '请重新输入登录密码',
          },
        ]}
      >
        <Input placeholder="请重新输入登录密码"></Input>
      </Form.Item>
      <Form.Item
        name="e"
        label="安全密码"
        rules={[
          {
            required: true,
            message: '请输入安全密码',
          },
        ]}
      >
        <SafeInput></SafeInput>
      </Form.Item>
      <Form.Item
        name="e2"
        label="确认密码"
        rules={[
          {
            required: true,
            message: '请输入确认密码',
          },
        ]}
      >
        <SafeInput></SafeInput>
      </Form.Item>
      <Form.Item
        name="agree"
        wrapperCol={{ offset: 4 }}
        valuePropName="checked"
        rules={[
          {
            required: true,
            message: '请同意《平台用户协议》',
          },
        ]}
      >
        <Checkbox>
          <ButtonModal
            title="平台用户协议"
            okText="同意"
            cancelText="不同意"
            onOk={(_, close) => {
              form.setFieldsValue({ agree: true });
              close();
            }}
            onCancel={() => {
              form.setFieldsValue({ agree: false });
            }}
            buttonProps={{ text: '同意《平台用户协议》', type: 'link', size: 'small' }}
          >
            {agreement}
          </ButtonModal>
        </Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" block onClick={onSubmit}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

const agreement = (
  <div className={styles.agreement}>
    <p>
      注意：在使用本网站之前，请先认真阅读以下条款。使用本网站即表示您已接受这些条款。如果您不接受这些条款，请不要使用本网站。
    </p>
    <p>一、网站的使用</p>
    <p className={styles.indent}>
      只要您在任何材料副本上保留本网站（简称"本站"）原材料中包含的所有版权或其它所有权声明，蓝瓴信息科技（上海）有限公司（简称"蓝瓴"）将授权您查看和下载本站上的材料。该材料包括但不限于本站上的软件、文件、消息、信息等，但该材料只能用于私人的非商业用途。您不得以任何方式修改本站上的材料，不得复制或公开展示、执行或分发这些材料，或是用于任何公开目的或商业目的，亦不得为任何目的在任何其它网站或联网的计算机环境中使用这些材料。蓝瓴对本站上的材料均拥有知识产权，如果未经授权使用本站上的任何材料，您可能会违反著作权法、商标法和其它法律。如果您违反了本声明所述任何条款，您使用本站上的材料的授权将自动终止，您必须立即销毁所有下载或打印的本站上的材料。
    </p>
    <p>二、软件的使用</p>
    <p className={styles.indent}>
      本站中任何可供下载及使用的软件（以下简称＂该软件″）全部权利均为蓝瓴所有。任何对该软件的使用必须受到软件许可协议中许可条款及其他您与蓝瓴所订之相关软件许可协议（以下简称“许可协议”）之限制。
    </p>
    <p>三、适用法律和管辖</p>
    <p className={styles.indent}>
      本声明条款适用于中华人民共和国法律并依照中华人民共和国法律解释，任何与使用本站及本站材料相关的纠纷均应提交位于上海市的有管辖权的人民法院依据中华人民共和国法律诉讼解决。
    </p>
    <p>[蓝瓴公司版权所有，未经许可，禁止复制、链接或建立镜像]</p>
  </div>
);
