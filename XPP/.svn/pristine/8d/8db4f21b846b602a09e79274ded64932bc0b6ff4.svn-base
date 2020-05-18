/**
 * @module 平台管理-租户执照管理
 */
import React from 'react';
import { PageHeaderWrapper, Card, SearchTree, Table, ButtonModal, LanLayout } from 'lanlinker';
import { Button, Input, Select, Modal, Form } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import DataManagement from '@/components/DataManagement';

const { confirm } = Modal;

export default () => {
  const [addLicenseForm] = Form.useForm();
  const [renewLicenseForm] = Form.useForm();

  const columns = [
    {
      title: '公司名称',
      dataIndex: 'a',
      ellipsis: true,
    },
    {
      title: '授权类型',
      dataIndex: 'b',
      ellipsis: true,
    },
    {
      title: '剩余时间',
      dataIndex: 'c',
      ellipsis: true,
    },
    {
      title: '激活日期',
      dataIndex: 'd',
      ellipsis: true,
    },
    {
      title: '到期日期',
      dataIndex: 'e',
      ellipsis: true,
    },
    {
      title: '操作',
      render() {
        return (
          <>
            <ButtonModal
              title="租户执照流水记录"
              width={1000}
              buttonProps={{ text: '详情', type: 'link' }}
            >
              <Table
                rowKey="id"
                actions={{
                  left: (
                    <>
                      <span>系统名称：劳务实名制管理系统</span>
                      <span style={{ marginLeft: 50 }}>租户名称：南通二建集团有限公司</span>
                    </>
                  ),
                }}
                columns={flowColumns}
                dataSource={data}
              />
            </ButtonModal>
            <ButtonModal
              title="新增执照"
              onOk={async (e, close) => {
                const res = await renewLicenseForm.validateFields();
                if (res) {
                  confirm({
                    title: '是否确认激活',
                    icon: <ExclamationCircleOutlined />,
                    content: '试用卡，剩余时间96天。',
                    onOk() {
                      close();
                    },
                  });
                }
              }}
              buttonProps={{ text: '续费', type: 'link' }}
            >
              <Form form={renewLicenseForm}>
                <Form.Item
                  name="a"
                  label="激活码"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input></Input>
                </Form.Item>
              </Form>
            </ButtonModal>
          </>
        );
      },
    },
  ];

  const treeData = [
    {
      id: 1,
      a: '名字1',
      b: '键1',
      c: '图标',
      pId: 0,
    },
    {
      id: 2,
      a: '名字2',
      b: '键2',
      c: '图标',
      pId: 0,
    },
    {
      id: 3,
      a: '名字3333333333333333333333333333333333333333333333',
      b: '键3',
      c: '图标',
      pId: 1,
    },
    {
      id: 7,
      a: '名字4',
      b: '键7',
      c: '图标',
      pId: 1,
    },
    {
      id: 8,
      a: '名字',
      b: '键8',
      c: '图标',
      pId: 1,
    },
    {
      id: 5,
      a: '名字',
      b: '键5',
      c: '图标',
      pId: 2,
    },
    {
      id: 4,
      a: '名字',
      b: '键4',
      c: '图标',
      pId: 3,
    },
    {
      id: 6,
      a: '名字',
      b: '键6',
      c: '图标',
      pId: 3,
    },
    {
      id: 9,
      a: '名字9',
      b: '键9',
      c: '图标',
      pId: 7,
    },
  ];

  return (
    <PageHeaderWrapper>
      <LanLayout
        siderCardProps={{ title: '平台执照分类' }}
        contentCardProps={{ title: '租户执照列表' }}
        siderList={[
          <SearchTree
            height={645}
            treeProps={{
              treeRawData: treeData,
              reName: {
                title: 'a',
                key: 'id',
                icon: 'c',
                pId: 'pId',
              },
            }}
          ></SearchTree>,
        ]}
        content={
          <Table
            actions={{
              left: (
                <ButtonModal
                  title="新增租户执照"
                  width={800}
                  onOk={async (e, close) => {
                    const res = await addLicenseForm.validateFields();
                    if (res) {
                      close();
                    }
                  }}
                  buttonProps={{ text: '新增', type: 'primary' }}
                >
                  <Form
                    form={addLicenseForm}
                    style={{ width: '80%', margin: '0 auto' }}
                    labelCol={{ span: 5 }}
                  >
                    <Form.Item name="a" label="系统名称">
                      劳务实名制管理系统
                    </Form.Item>
                    <Form.Item name="b" label="企业名称">
                      <Select></Select>
                    </Form.Item>
                    <Form.Item name="c" label="激活码">
                      <Input placeholder="请输入产品激活码"></Input>
                    </Form.Item>
                  </Form>
                </ButtonModal>
              ),
              right: (
                <>
                  <Input placeholder="请输入要查询的关键字"></Input>
                  <Button type="primary">查询</Button>
                </>
              ),
            }}
            columns={columns}
            rowKey="b"
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

const flowColumns = [
  {
    title: '流水号',
    dataIndex: 'a',
  },
  {
    title: '授权类型',
    dataIndex: 'b',
  },
  {
    title: '激活码',
    dataIndex: 'c',
  },
  {
    title: '激活日期',
    dataIndex: 'd',
  },
  {
    title: '失效日期',
    dataIndex: 'e',
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
