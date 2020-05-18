/**
 * @module 用户认证管理
 * @author DesYang
 */
import { useState, useEffect } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import { Row, Col, Table, Button, Form, Select } from 'antd';
import License from '@/components/License';
import FormTextItem from '@/components/FormTextItem';
import classNames from 'classnames';
import styles from './style.less';
import person from './imgs/person.png';

const cardType = {
  idCard: '居民身份证',
  idCardTemp: '临时身份证',
};

export default () => {
  const [type, setType] = useState('idCard');
  const [editable, setEditable] = useState(false);
  const [formIdCard] = Form.useForm();
  const [formIdCardTemp] = Form.useForm();
  const [formLicense] = Form.useForm();

  useEffect(() => {
    setTimeout(() => {
      formIdCard.setFieldsValue(formInit);
      formIdCardTemp.setFieldsValue(formInit2);
      formLicense.setFieldsValue(license);
    }, 0);
  }, []);

  return (
    <PageHeaderWrapper className={styles.userAuth}>
      <Card title="个人实名信息管理">
        <Row justify="space-between" style={{ marginBottom: 24 }}>
          <Form layout="inline">
            <Form.Item label="证件类型">
              <Select
                value={type}
                onSelect={e => {
                  setType(e);
                }}
              >
                {Object.keys(cardType).map((v, i) => (
                  <Select.Option value={v} key={v}>
                    {cardType[v]}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="证件地区">
              <Select></Select>
            </Form.Item>
          </Form>
          <div>
            {editable ? (
              <Button
                type="primary"
                onClick={() => {
                  console.log(formIdCard.getFieldsValue());
                  setEditable(false);
                }}
              >
                保存
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={() => {
                  setEditable(true);
                }}
              >
                编辑
              </Button>
            )}
            <Button type="primary" style={{ marginLeft: 8 }}>
              实名认证提交
            </Button>
          </div>
        </Row>
        <CardSwitcher
          type={type}
          editable={editable}
          formList={[formIdCard, formIdCardTemp]}
        ></CardSwitcher>
      </Card>
      <Card title="用户实名认证情况列表" marginTop>
        <Table columns={columns} dataSource={dataSource} bordered></Table>
      </Card>
      {/* todo */}
      <br />
      <Card title="企业信息管理">
        <License form={formLicense} editable={editable} />
        <Row type="flex" justify="end" style={{ marginTop: 20 }}>
          {editable ? (
            <Button
              type="primary"
              onClick={() => {
                console.log(formIdCard.getFieldsValue());
                setEditable(false);
              }}
            >
              保存
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => {
                setEditable(true);
              }}
            >
              编辑
            </Button>
          )}
          <Button type="primary" style={{ marginLeft: 8 }}>
            实名认证提交
          </Button>
        </Row>
      </Card>
      <Card title="用户实名认证情况列表" marginTop>
        <Table columns={columns} dataSource={dataSource} bordered></Table>
      </Card>
    </PageHeaderWrapper>
  );
};

const CardSwitcher = ({ type, editable, formList }) => {
  const keys = Object.keys(cardType);
  switch (type) {
    case keys[0]:
      return <IdCardForm editable={editable} form={formList[0]}></IdCardForm>;
    case keys[1]:
      return <IdCardTempForm editable={editable} form={formList[1]}></IdCardTempForm>;
    default:
      return;
  }
};

const IdCardForm = ({ editable, form }) => {
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
        <FormTextItem name="idNumber" label="公民身份证号码" editable={editable} width={300} />
      </div>
      <div className={styles.back}>
        <FormTextItem name="visa" label="签发机关" editable={editable} width={280} />
        <FormTextItem name="expiry" label="有效期限" editable={editable} width={280} />
      </div>
    </Form>
  );
};

const IdCardTempForm = ({ editable, form }) => {
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

const license = {
  a: '913206811388888888',
  b: '320681000000000',
  c: '江苏南通二建集团有限公司',
  d: '有限责任公司',
  e: '上海市人民中路888号',
  f: '杨晓东',
  g: '人民币18500万元整',
  h: '2001-11-12',
  i: '2001-06-18 ~ 2033-12-02',
  j:
    '房屋建筑工程总承包（特级）；市政公用工程施工总承包（壹级）；建筑装修装饰工程专业承包（壹级）；机电设备安装工程专业承包（壹级）；钢结构工程专业承包（壹级）；机电安装工程施工总承包（贰级）；消防设施工程专业承包（贰级）；地基基础工程专业承包（贰级）；起重设备安装工程专业承包（贰级）（涉及专项审批的，在审批机关批准的经营期限内从事经营）；承包与其实力、规模、业绩相适应的国外工程项目；五金、建筑材料销售；建筑施工机械设备租赁，园林绿化工程施工，模块化建筑技术研发、组装。（依法须经批准的项目，经相关部门批准后方可开展经营活动）',
  k: '上海市市场监督管理局',
  l: '2001-06-18',
};

const columns = [
  {
    title: '事务编号',
    dataIndex: 'key',
  },
  {
    title: '事务类型',
    dataIndex: 'type',
  },
  {
    title: '事务时间',
    dataIndex: 'address',
  },
  {
    title: '事务状态',
    dataIndex: 'name',
  },
  {
    title: '事务附注',
    dataIndex: 'age',
  },
];

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    type: '1',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
  {
    key: '3',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
  {
    key: '4',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    type: '2',
  },
];

const formInit = {
  name: '张三',
  sex: '男',
  nation: '汉',
  year: 1999,
  month: 9,
  day: 9,
  address: '上海市人民中路888号',
  idNumber: 112319199909090111,
  visa: '上海市公安局',
  expiry: '2001.01.01 - 2021.12.31',
};

const formInit2 = {
  name: '张三束缚',
  sex: '男',
  nation: '汉',
  year: 1999,
  month: 9,
  day: 9,
  address: '上海市人民中路888号',
  idNumber: 112319199909090111,
  visa: '上海市公安局',
  expiry: '2001.01.01 - 2021.12.31',
};
