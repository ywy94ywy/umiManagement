/**
 * @module 租户管理-用户执照管理
 */
import { PageHeaderWrapper, Card, LanLayout, Table, ButtonModal, SystemsList } from 'lanlinker';
import { Input, Button } from 'antd';
import DataManagement from '@/components/DataManagement';

export default () => {
  return (
    <PageHeaderWrapper>
      <LanLayout
        siderCardProps={{ title: '租户执照' }}
        contentCardProps={{ title: '用户执照列表' }}
        sider={<SystemsList list={list} height={650} />}
        content={
          <Table
            actions={{
              right: (
                <>
                  <Input placeholder="请输入要查询的关键字"></Input>
                  <Button type="primary">查询</Button>
                </>
              ),
            }}
            columns={columns}
            rowKey="id"
            dataSource={data}
          ></Table>
        }
      ></LanLayout>
      <Card title="数据管理" marginTop>
        <DataManagement
          onClicks={{
            importClassify() {
              console.log(1);
            },
            exportTags() {
              console.log(2);
            },
            importUsers() {
              console.log(3);
            },
            exportUsers() {
              console.log(4);
            },
            importLicense() {
              console.log(5);
            },
            licenseRecords() {
              console.log(6);
            },
          }}
        />
      </Card>
    </PageHeaderWrapper>
  );
};
const columns = [
  {
    title: '流水编码',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '用户名称',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '申请时间',
    dataIndex: 'c',
    ellipsis: true,
  },
  {
    title: '身份证号码',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '是否身份验证',
    dataIndex: 'e',
    ellipsis: true,
  },
  {
    title: '操作',
    render() {
      return (
        <>
          <ButtonModal buttonProps={{ text: '通过', type: 'link' }}>lll</ButtonModal>
          <ButtonModal buttonProps={{ text: '拒绝', type: 'link' }}>lll</ButtonModal>
        </>
      );
    },
  },
];

const list = [
  {
    title: '通行证管理系统',
  },
  {
    title: '项目综合管理系统',
  },
  {
    title: '劳务实名制管理系统',
  },
  {
    title: '视频监控管理系统',
  },
  {
    title: '物料管理系统',
  },
  {
    title: '质量安全监管系统',
  },
  {
    title: '设备管理系统',
  },
  {
    title: '项目进度管理系统',
  },
  {
    title: '环境管理系统',
  },
  {
    title: '环境管理系统',
  },
];

const data = [];
for (let i = 0; i < 8; i++) {
  data.push({
    a: '个人',
    b: 23142,
    c: '南通二建集团有限公司',
    d: 15812345678,
    e: '12345678910@qq.com',
    f: 310109197708022019,
    g: '南通二建集团有限公司',
    h: '南通二建',
    i: '江苏省南通市启东市人民中路683号',
    j: '0351-0123456',
    k: 65756,
    l: 54645,
    id: i,
  });
}
