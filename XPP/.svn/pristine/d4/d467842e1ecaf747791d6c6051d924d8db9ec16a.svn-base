/**
 * @module 用户联合登录管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper, Form, SafeInput, BindInput } from 'lanlinker';
import { fetchUserUnion } from './servers';
import { Card } from 'antd';
import { useRequest } from 'umi';

const Union = () => {
  const [form] = Form.useForm();
  const [flags, setFlags] = useState({});

  useRequest(fetchUserUnion, {
    onSuccess(res, params) {
      if (res) {
        form.setFieldsValue(res);
        setFlags(res);
      }
    },
  });

  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        <Form
          form={form}
          columns={2}
          style={{ width: '70%', margin: '0 auto' }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item name="a" label="用户QQ账号">
            <BindInputWrapper
              disabled={flags.a}
              activeModalProps={{
                title: 'QQ扫码绑定',
              }}
              activeModal={<div>QRCODE</div>}
              inactiveModalProps={{
                title: '解绑QQ帐号',
              }}
              inactiveModal={
                <Form style={{ width: '80%', margin: '40px auto' }}>
                  <Form.Item name="a" label="验证安全码">
                    <SafeInput></SafeInput>
                  </Form.Item>
                </Form>
              }
            ></BindInputWrapper>
          </Form.Item>
          <Form.Item
            label="绑定时间"
            labelCol={{
              pull: 1,
            }}
          >
            时间
          </Form.Item>
          <Form.Item name="b" label="用户微信账号">
            <BindInputWrapper
              disabled={flags.b}
              activeModalProps={{
                title: '微信扫码绑定',
              }}
              activeModal={<div>QRCODE</div>}
              inactiveModalProps={{
                title: '解绑微信帐号',
              }}
              inactiveModal={
                <Form style={{ width: '80%', margin: '40px auto' }}>
                  <Form.Item name="a" label="验证安全码">
                    <SafeInput></SafeInput>
                  </Form.Item>
                </Form>
              }
            ></BindInputWrapper>
          </Form.Item>
          <Form.Item
            label="绑定时间"
            labelCol={{
              pull: 1,
            }}
          >
            时间
          </Form.Item>
          <Form.Item name="c" label="用户新浪账号">
            <BindInputWrapper
              disabled={flags.c}
              active
              activeModalProps={{
                title: '新浪扫码绑定',
              }}
              activeModal={<div>QRCODE</div>}
              inactiveModalProps={{
                title: '解绑新浪帐号',
              }}
              inactiveModal={
                <Form style={{ width: '80%', margin: '40px auto' }}>
                  <Form.Item name="a" label="验证安全码">
                    <SafeInput></SafeInput>
                  </Form.Item>
                </Form>
              }
            ></BindInputWrapper>
          </Form.Item>
          <Form.Item
            label="绑定时间"
            labelCol={{
              pull: 1,
            }}
          >
            时间
          </Form.Item>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

const BindInputWrapper = props => (
  <BindInput activeTitle="绑定" inactiveTitle="解绑" showModal {...props}></BindInput>
);

export default Union;
