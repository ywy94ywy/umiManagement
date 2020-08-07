/**
 * @module 账号初始化
 */
import React, { useState, useEffect } from 'react';
import SecretFormItem from '@/components/SecretFormItem';
import { Steps, Form, Input, Row, Button, Result, Radio } from 'antd';
import { history } from 'umi';
import styles from './style.less';
const { Step } = Steps;

export default () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.initialize}>
      <h3>账号初始化管理</h3>
      <Form colon={false} labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}>
        <Steps current={current} size="small" className={styles.steps}>
          <Step title="选择账号类型" />
          <Step title="填写基本信息" />
          <Step title="填写密保问题" />
          <Step title="初始化完成" />
        </Steps>
        <Switcher current={current} setCurrent={setCurrent}></Switcher>
      </Form>
    </div>
  );
};

const Switcher = ({ current, setCurrent }) => {
  const prev = () => {
    setCurrent(c => --c);
  };

  const next = () => {
    setCurrent(c => ++c);
  };

  switch (current) {
    case 0:
      return (
        <>
          <Form.Item name="a" label="账号类型">
            <Radio.Group defaultValue={0}>
              <Radio value={0}>个人</Radio>
              <Radio value={1}>企业</Radio>
            </Radio.Group>
          </Form.Item>
          <Row justify="end">
            <Button type="primary" onClick={next}>
              下一步
            </Button>
          </Row>
        </>
      );
    case 1:
      return (
        <>
          <Form.Item name="e" label="姓名">
            <Input placeholder="请输入真实姓名"></Input>
          </Form.Item>
          <Form.Item name="f" label="性别">
            <Radio.Group defaultValue={0}>
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="G" label="公司全名">
            <Input placeholder="请输入公司全名"></Input>
          </Form.Item>
          <Form.Item name="H" label="公司简名">
            <Input placeholder="请输入公司简名"></Input>
          </Form.Item>
          <Row justify="space-between">
            <Button onClick={prev}>上一步</Button>
            <Button type="primary" onClick={next}>
              下一步
            </Button>
          </Row>
        </>
      );
    case 2:
      return (
        <>
          <SecretFormItem></SecretFormItem>
          <Row justify="space-between">
            <Button onClick={prev}>上一步</Button>
            <Button type="primary" onClick={next}>
              下一步
            </Button>
          </Row>
        </>
      );
    case 3:
      return (
        <>
          <Result
            status="success"
            title="恭喜您，初始化完成！"
            extra={
              <Button
                type="primary"
                onClick={() => {
                  history.push('/');
                }}
              >
                确定
              </Button>
            }
          ></Result>
          <Count />
        </>
      );
    default:
      return null;
  }
};

const Count = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    let reduce = null;
    if (count > 0) {
      reduce = setTimeout(() => {
        setCount(c => --c);
      }, 1000);
    } else {
      history.push('/');
    }
    return () => clearTimeout(reduce);
  }, [count]);
  return <div style={{ textAlign: 'center' }}>{count}秒后自动进入！</div>;
};
