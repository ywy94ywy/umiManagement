/**
 * @module 用户组织管理
 * @author DesYang
 * @description 暂时放弃
 */
import { PageHeaderWrapper, Card, IconFont } from 'lanlinker';
import { Input, Button, Table, Form, Row, Col } from 'antd';
import SystemCard from '@/components/SystemCard';
import styles from './style.less';
import applied from './imgs/applied.png';

export default () => {
  return (
    <PageHeaderWrapper className={styles.userOrganization}>
      <Card title="搜索组织名称">
        <Form>
          <Form.Item label="公司全名" required>
            <Row gutter={8} style={{ width: 300 }}>
              <Col>
                <Form.Item name="company" noStyle>
                  <Input placeholder="请输入公司名称查询" />
                </Form.Item>
              </Col>
              <Col>
                <Button type="primary" IconFont={<IconFont type="search"></IconFont>}>
                  查询
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <div className={styles.systemsWrapper}>
          {systems.map((v, i) => (
            <SystemCard data={v} type="grey" key={i} bordered></SystemCard>
          ))}
        </div>
      </Card>
      <Card title="已关联组织" marginTop>
        <Table rowKey={(v, i) => i} columns={columns} dataSource={dataSource} bordered></Table>
      </Card>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '组织全名',
    dataIndex: 'a',
  },
  {
    title: '组织类型',
    dataIndex: 'b',
  },
  {
    title: '当前人数',
    dataIndex: 'c',
  },
  {
    title: '所属部门',
    dataIndex: 'd',
  },
  {
    title: '操作',
    render: () => (
      <Button type="link" danger>
        解除关联
      </Button>
    ),
  },
];

const dataSource = [
  {
    a: '南通二建集团有限公司',
    b: '建设单位',
    c: '1921',
    d: '未分配',
  },
  {
    a: '南通二建集团有限公司',
    b: '建设单位',
    c: '1921',
    d: '未分配',
  },
  {
    a: '南通二建集团有限公司',
    b: '建设单位',
    c: '1921',
    d: '未分配',
  },
];

const systems = [
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    description: (
      <>
        <div>当前公司 447人</div>
        <div>当前进行中的项目 47项</div>
      </>
    ),
    IconFont: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    description: (
      <>
        <div>当前公司 447人</div>
        <div>当前进行中的项目 47项</div>
      </>
    ),
    IconFont: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    description: (
      <>
        <div>当前公司 447人</div>
        <div>当前进行中的项目 47项</div>
      </>
    ),
    IconFont: applied,
  },
  {
    title: '劳务实名制管理系统_江苏南通二建集团公司',
    description: (
      <>
        <div>当前公司 447人</div>
        <div>当前进行中的项目 47项</div>
      </>
    ),
    IconFont: applied,
  },
];
