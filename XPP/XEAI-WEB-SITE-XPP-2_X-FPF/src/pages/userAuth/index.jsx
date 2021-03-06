/**
 * @module 用户认证管理
 * @todo 不知业务流程
 */
import { useState, useEffect } from 'react';
import { PageHeaderWrapper, Card, Table } from 'lanlinker';
import { Row, Button, Form, Select, Space } from 'antd';
import { IdCard, IdCardTemp } from './idCardWrapper';
import License from '@/components/License';

const CARD_TYPE_LIST = ['居民身份证', '临时身份证'];

export default () => {
  const [cardType, setCardType] = useState(CARD_TYPE_LIST[0]);
  const [editable, setEditable] = useState(false);
  const [editable2, setEditable2] = useState(false);
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
    <PageHeaderWrapper>
      <Card title="个人实名信息管理">
        <Row justify="space-between" style={{ marginBottom: 24 }}>
          <Form layout="inline">
            <Form.Item label="证件类型">
              <Select value={cardType} onSelect={key => setCardType(key)}>
                {CARD_TYPE_LIST.map(value => (
                  <Select.Option value={value} key={value}>
                    {value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="证件地区">
              {/* 地区组件封装 */}
              <Space>
                <Select></Select>
                <Select></Select>
                <Select></Select>
              </Space>
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
        {cardType === CARD_TYPE_LIST[0] && <IdCard form={formIdCard} editable={editable} />}
        {cardType === CARD_TYPE_LIST[1] && <IdCardTemp form={formIdCardTemp} editable={editable} />}
      </Card>
      <Card title="用户实名认证情况列表" marginTop>
        <Table columns={columns} dataSource={dataSource}></Table>
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
