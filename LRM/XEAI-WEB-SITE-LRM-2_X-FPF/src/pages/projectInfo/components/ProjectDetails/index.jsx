import { useEffect } from 'react';
import { Table, Form } from 'lanlinker';
import { Tabs } from 'antd';
import License from '@/components/License';

const { TabPane } = Tabs;

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(license);
  }, []);

  return (
    <Tabs>
      <TabPane key="项目基本信息" tab="项目基本信息">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="项目编码">1</Form.Item>
          <Form.Item label="项目中文全名" required>
            1
          </Form.Item>
          <Form.Item label="项目中文简名">1</Form.Item>
          <Form.Item label="立项文号">1</Form.Item>
          <Form.Item label="立项级别">1</Form.Item>
          <Form.Item label="建设用地规划许可证编号">1</Form.Item>
          <Form.Item label="建设工程规划许可证编号">1</Form.Item>
          <Form.Item label="项目描述">1</Form.Item>
        </Form>
      </TabPane>
      <TabPane key="工程基本信息" tab="工程基本信息">
        <Form
          labelCol={{ flex: '140px' }}
          columns={2}
          style={{ width: 620, margin: '0 auto' }}
        >
          <Form.Item label="工程编码">1</Form.Item>
          <Form.Item label="工程编号">1</Form.Item>
          <Form.Item label="工程中文全名" required>
            1
          </Form.Item>
          <Form.Item label="工程类型" required>
            1
          </Form.Item>
          <Form.Item label="工程状态" required>
            1
          </Form.Item>
          <Form.Item label="建设规模">1</Form.Item>
          <Form.Item label="建设性质">1</Form.Item>
          <Form.Item label="工程用途">1</Form.Item>
          <Form.Item label="工程所在地" colSpan={2} required>
            1
          </Form.Item>
          <Form.Item label="工程地点" colSpan={2}>
            1
          </Form.Item>
          <Form.Item label="WGS84经度">1</Form.Item>
          <Form.Item label="WGS84纬度">1</Form.Item>
          <Form.Item label="工程投资金额">1</Form.Item>
          <Form.Item label="工程建筑面积">1</Form.Item>
          <Form.Item label="工程建筑长度">1</Form.Item>
          <Form.Item label="施工许可证编号">1</Form.Item>
          <Form.Item label="工程开工日期">1</Form.Item>
          <Form.Item label="工程竣工日期">1</Form.Item>
          <Form.Item label="项目经理">1</Form.Item>
          <Form.Item label="联系电话">1</Form.Item>
        </Form>
      </TabPane>
      <TabPane key="五方责任主体基本信息" tab="五方责任主体基本信息">
        <Tabs type="card">
          <TabPane key="承建单位" tab="承建单位">
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              // className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
          <TabPane key="建设单位" tab="建设单位">
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              // className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
          <TabPane key="设计单位" tab="设计单位">
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              // className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
          <TabPane key="勘查单位" tab="勘查单位">
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              // className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
          <TabPane key="监理单位" tab="监理单位">
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              // className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane key="参建各方基本信息" tab="参建各方基本信息">
        <Tabs type="card">
          <TabPane key="劳务分包单位" tab="劳务分包单位">
            <Table columns={columns1}></Table>
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              //  className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
          <TabPane key="劳务专业分包单位" tab="劳务专业分包单位">
            <Table columns={columns2}></Table>
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              //  className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
          <TabPane key="劳务甲指分包单位" tab="劳务甲指分包单位">
            <Table columns={columns3}></Table>
            <License
              form={form}
              // className={styles.license}
              formLayout={{
                labelCol: { span: 5 },
                wrapperCol: { span: 10 },
              }}
            ></License>
            <Form
              // className={styles.licenseExtra}
              columns={2}
            >
              <Form.Item label="负责人姓名">1</Form.Item>
              <Form.Item label="负责人职级">1</Form.Item>
              <Form.Item label="负责人手机">1</Form.Item>
              <Form.Item label="负责人电话">1</Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </TabPane>
    </Tabs>
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

const columns1 = [
  {
    title: '劳务分包单位',
    dataIndex: 'a',
  },
  {
    title: '注册资本（万元）',
    dataIndex: 'b',
  },
  {
    title: '法定代表人',
    dataIndex: 'c',
  },
  {
    title: '成立日期',
    dataIndex: 'f',
  },
  {
    title: '操作',
    render() {
      return <Button type="link">查看详情</Button>;
    },
  },
];
const columns2 = [
  {
    title: '劳务专业分包单位',
    dataIndex: 'a',
  },
  {
    title: '注册资本（万元）',
    dataIndex: 'b',
  },
  {
    title: '法定代表人',
    dataIndex: 'c',
  },
  {
    title: '成立日期',
    dataIndex: 'f',
  },
  {
    title: '操作',
    render() {
      return <Button type="link">查看详情</Button>;
    },
  },
];
const columns3 = [
  {
    title: '劳务甲指分包单位',
    dataIndex: 'a',
  },
  {
    title: '注册资本（万元）',
    dataIndex: 'b',
  },
  {
    title: '法定代表人',
    dataIndex: 'c',
  },
  {
    title: '成立日期',
    dataIndex: 'f',
  },
  {
    title: '操作',
    render() {
      return <Button type="link">查看详情</Button>;
    },
  },
];
