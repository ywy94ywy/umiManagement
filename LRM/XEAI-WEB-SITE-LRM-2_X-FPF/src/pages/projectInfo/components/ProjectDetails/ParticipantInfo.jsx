/**
 * @module 参建各方基本信息
 */
import { useEffect } from 'react';
import { Form, Table } from 'lanlinker';
import LicenseWrapper from '../LicenseWrapper';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

export default () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(license);
  }, []);

  return (
    <Tabs type="card">
      <TabPane key="劳务分包单位" tab="劳务分包单位">
        <Table
          rowKey="id"
          columns={columns1}
          dataSource={[
            {
              id: '1',
              a: '213',
            },
          ]}
        />
        <LicenseWrapper form={form} />
      </TabPane>
      <TabPane key="劳务专业分包单位" tab="劳务专业分包单位">
        <Table columns={columns2} />
        <LicenseWrapper form={form} />
      </TabPane>
      <TabPane key="劳务甲指分包单位" tab="劳务甲指分包单位">
        <Table columns={columns3} />
        <LicenseWrapper form={form} />
      </TabPane>
    </Tabs>
  );
};

const columns1 = [
  {
    title: '劳务分包单位',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '注册资本（万元）',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '法定代表人',
    dataIndex: 'c',
    ellipsis: true,
  },
  {
    title: '成立日期',
    dataIndex: 'f',
    ellipsis: true,
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
    ellipsis: true,
  },
  {
    title: '注册资本（万元）',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '法定代表人',
    dataIndex: 'c',
    ellipsis: true,
  },
  {
    title: '成立日期',
    dataIndex: 'f',
    ellipsis: true,
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
    ellipsis: true,
  },
  {
    title: '注册资本（万元）',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '法定代表人',
    dataIndex: 'c',
    ellipsis: true,
  },
  {
    title: '成立日期',
    dataIndex: 'f',
    ellipsis: true,
  },
  {
    title: '操作',
    render() {
      return <Button type="link">查看详情</Button>;
    },
  },
];

const license = {
  a: '913206811388888888',
  b: '320681000000000',
  c: '江苏南通二建集团有限公司',
  d: '有限责任公司',
  e: '上海市人民中路888号',
  f: '杨晓东',
  g: '18500',
  h: '2001-11-12',
  i: '2001-06-18 ~ 2033-12-02',
  j:
    '房屋建筑工程总承包（特级）；市政公用工程施工总承包（壹级）；建筑装修装饰工程专业承包（壹级）；机电设备安装工程专业承包（壹级）；钢结构工程专业承包（壹级）；机电安装工程施工总承包（贰级）；消防设施工程专业承包（贰级）；地基基础工程专业承包（贰级）；起重设备安装工程专业承包（贰级）（涉及专项审批的，在审批机关批准的经营期限内从事经营）；承包与其实力、规模、业绩相适应的国外工程项目；五金、建筑材料销售；建筑施工机械设备租赁，园林绿化工程施工，模块化建筑技术研发、组装。（依法须经批准的项目，经相关部门批准后方可开展经营活动）',
  k: '上海市市场监督管理局',
  l: '2001-06-18',
};
