import { useState, useEffect } from 'react';
import { PageHeaderWrapper, Card, Table } from 'lanlinker';
import { Row, Col, Button, Form, Select, Space } from 'antd';
import FormTextItem from '@/components/FormTextItem';
import classNames from 'classnames';
import styles from './style.less';
import person from './imgs/person.png';

export const IdCard = ({ editable, form }) => {
  return (
    <Form form={form} colon={false} className={classNames(styles.cardWrapper, styles.idCard)}>
      <div className={styles.front}>
        <Row style={{ width: 300 }}>
          <FormTextItem label="姓名" name="name" editable={editable} />
        </Row>
        <Row gutter={8} style={{ width: 300 }}>
          <Col span={8}>
            <FormTextItem label="性别" name="sex" editable={editable} width={50} />
          </Col>
          <Col span={12}>
            <FormTextItem label="民族" name="nation" editable={editable} width={100} />
          </Col>
        </Row>
        <Form.Item label="出生">
          <Row gutter={8} style={{ width: 400 }}>
            <Col span={4}>
              <FormTextItem name="year" editable={editable} noStyle />
            </Col>
            <Col span={2}>
              <LabelWrapper>年</LabelWrapper>
            </Col>
            <Col span={3}>
              <FormTextItem name="month" editable={editable} noStyle />
            </Col>
            <Col span={2}>
              <LabelWrapper>月</LabelWrapper>
            </Col>
            <Col span={3}>
              <FormTextItem name="day" editable={editable} noStyle />
            </Col>
            <Col span={2}>
              <LabelWrapper>日</LabelWrapper>
            </Col>
          </Row>
        </Form.Item>
        <FormTextItem name="address" label="住址" textArea editable={editable} width={290} />
        <FormTextItem name="idNumber" label="公民身份号码" editable={editable} width={300} />
      </div>
      <div className={styles.back}>
        <FormTextItem name="visa" label="签发机关" editable={editable} width={280} />
        <FormTextItem name="expiry" label="有效期限" editable={editable} width={280} />
      </div>
    </Form>
  );
};

export const IdCardTemp = ({ editable, form }) => {
  return (
    <Form form={form} colon={false} className={classNames(styles.cardWrapper, styles.idCardTemp)}>
      <div className={styles.front}>
        <div className={styles.profile}>
          <img src={person} alt="profile" />
        </div>
        <Row style={{ width: 300 }}>
          <FormTextItem label="姓名" name="name" editable={editable} />
        </Row>
        <Row gutter={8} style={{ width: 300 }}>
          <Col span={8}>
            <FormTextItem label="性别" name="sex" editable={editable} width={50} />
          </Col>
          <Col span={12}>
            <FormTextItem label="民族" name="nation" editable={editable} width={100} />
          </Col>
        </Row>
        <Form.Item label="出生">
          <Row gutter={8} style={{ width: 400 }}>
            <Col span={4}>
              <FormTextItem name="year" editable={editable} noStyle />
            </Col>
            <Col span={2}>
              <LabelWrapper>年</LabelWrapper>
            </Col>
            <Col span={3}>
              <FormTextItem name="month" editable={editable} noStyle />
            </Col>
            <Col span={2}>
              <LabelWrapper>月</LabelWrapper>
            </Col>
            <Col span={3}>
              <FormTextItem name="day" editable={editable} noStyle />
            </Col>
            <Col span={2}>
              <LabelWrapper>日</LabelWrapper>
            </Col>
          </Row>
        </Form.Item>
        <FormTextItem name="address" label="住址" editable={editable} width={298} />
        <FormTextItem name="visa" label="签发机关" editable={editable} width={270} />
        <FormTextItem name="expiry" label="有效期限" editable={editable} width={270} />
        <FormTextItem name="idNumber" label="公民身份证号码" editable={editable} width={228} />
      </div>
      <div className={styles.back}></div>
    </Form>
  );
};

const LabelWrapper = ({ children }) => (
  <div className="ant-col ant-form-item-label" style={{ height: '100%' }}>
    <label className="ant-form-item-no-colon">{children}</label>
  </div>
);
