/**
 * @module 用户联合登录管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper, Form, SafeInput, BindInput } from 'lanlinker';
import { Card, Skeleton } from 'antd';
import { useRequest } from 'umi';
import { fetchUserUnion } from './servers';

const Union = () => {
  const [form] = Form.useForm();
  const [flags, setFlags] = useState({ a: false, b: false, c: false }); // todo 假数据
  const fakeTime = '2020-01-10'; // todo 假数据

  // const { loading } = useRequest(fetchUserUnion, {
  // onSuccess(res) {
  //   form.setFieldsValue(res);
  // },
  // });

  const layoutStyle = { width: 800, margin: '20px 0 0 50px' };
  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        {/* {loading ? (
          <div style={layoutStyle}>
            <Skeleton active />
          </div>
        ) : ( */}
        <Form
          form={form}
          columns={2}
          style={layoutStyle}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item name="a" label="用户QQ账号">
            <BindInputWrapper
              disabled={flags.a}
              active={!flags.a}
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
            {fakeTime}
          </Form.Item>
          <Form.Item name="b" label="用户微信账号">
            <BindInputWrapper
              disabled={flags.b}
              active={!flags.b}
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
            {fakeTime}
          </Form.Item>
          <Form.Item name="c" label="用户新浪账号">
            <BindInputWrapper
              disabled={flags.c}
              active={!flags.c}
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
            {fakeTime}
          </Form.Item>
        </Form>
        {/* )} */}
      </Card>
    </PageHeaderWrapper>
  );
};

const BindInputWrapper = props => (
  <BindInput activeTitle="绑定" inactiveTitle="解绑" showModal {...props}></BindInput>
);

export default Union;
