import { useState } from 'react';
import { Table, ButtonModal, Form as LanForm } from 'lanlinker';
import { Button, Form, Checkbox, Row, Menu, Modal, Dropdown, Input, Col, Select, Tabs } from 'antd';
import { UpOutlined, DownOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

// 表单
import userForm from '../../forms/user';
import accountForm from '../../forms/account';
import baseForm from '../../forms/base';
import securityForm from '../../forms/security';
import generalForm from '../../forms/general';
import certificateForm from '../../forms/certificate';
import expandForm from '../../forms/expand';

import walletForm from '../../forms/wallet';
import bindForm from '../../forms/bind';
import logForm from '../../forms/log';

export default () => {
  const [showSearch, setShowSearch] = useState(true);
  const columns = [
    {
      title: '用户类型',
      dataIndex: 'a',
      width: 60,
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: '用户全名',
      dataIndex: 'g',
      width: 120,
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: '用户简名',
      dataIndex: 'h',
      width: 90,
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: '数字账号',
      dataIndex: 'b',
      width: 100,
      ellipsis: true,
    },
    {
      title: '昵称账号',
      dataIndex: 'c',
      width: 150,
      ellipsis: true,
    },
    {
      title: '手机账号',
      dataIndex: 'd',
      width: 80,
      ellipsis: true,
    },
    {
      title: '邮箱账号',
      dataIndex: 'e',
      width: 120,
      ellipsis: true,
    },
    {
      title: '证件账号',
      dataIndex: 'f',
      width: 120,
      ellipsis: true,
    },
    {
      title: '操作',
      fixed: 'right',
      width: 60,
      render() {
        return (
          <Dropdown
            trigger="click"
            overlay={
              <Menu>
                <Menu.Item>
                  <ButtonModal buttonProps={{ text: '详情', type: 'link' }}></ButtonModal>
                </Menu.Item>
                <Menu.Item>
                  <ButtonModal buttonProps={{ text: '修改', type: 'link' }}></ButtonModal>
                </Menu.Item>
                <Menu.Item>
                  <ButtonModal buttonProps={{ text: '删除', type: 'link' }}></ButtonModal>
                </Menu.Item>
              </Menu>
            }
          >
            <a>更多操作</a>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <Form
        labelCol={{ flex: '0 0 75px' }}
        wrapperCol={{ flex: '0.7 0.7 100px' }}
        initialValues={{ d: '1' }}
      >
        <Row>
          <Col span={8}>
            <Form.Item label="用户全名">
              <Input placeholder="请输入用户全名关键字"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="手机账号">
              <Input placeholder="请输入手机帐号关键字"></Input>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="证件账号">
              <Input placeholder="请输入证件帐号关键字"></Input>
            </Form.Item>
          </Col>
          {showSearch && (
            <>
              <Col span={8}>
                <Form.Item name="d" label="用户类型">
                  <Select>
                    <Select.Option value="1">个人</Select.Option>
                    <Select.Option value="2">企业</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="数字账号">
                  <Input placeholder="请输入数字帐号关键字"></Input>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="昵称账号">
                  <Input placeholder="请输入昵称帐号关键字"></Input>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="用户简名">
                  <Input placeholder="请输入用户简名关键字"></Input>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="邮箱账号">
                  <Input placeholder="请输入邮箱帐号关键字"></Input>
                </Form.Item>
              </Col>
            </>
          )}
        </Row>
      </Form>
      <Table
        rowKey="b" // todo
        columns={columns}
        dataSource={data}
        rowSelection={{
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
        }}
        scroll={{ x: 1800, y: showSearch ? 345 : null }}
        actions={{
          left: (
            <>
              <ButtonModal
                title="新增"
                width={1000}
                buttonProps={{ text: '新增', type: 'primary' }}
              >
                <LanForm configForm={userForm()} columns={2} labelCol={{ span: 8 }}></LanForm>
                <Tabs>
                  <Tabs.TabPane tab="用户基本信息" key="1" style={formStyle}>
                    <LanForm
                      configForm={baseForm()}
                      columns={2}
                      labelCol={{ span: 8 }}
                      wrapperCol={{ span: 15 }}
                    ></LanForm>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="用户安全信息" key="2" style={formStyle}>
                    <LanForm
                      configForm={securityForm()}
                      columns={2}
                      labelCol={{ span: 8 }}
                    ></LanForm>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="用户综合信息" key="3">
                    <LanForm
                      configForm={generalForm()}
                      columns={2}
                      labelWidth={170}
                      style={formStyle}
                    ></LanForm>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="用户证件信息" key="4">
                    <LanForm
                      configForm={certificateForm()}
                      columns={2}
                      labelWidth={170}
                      style={formStyle}
                    ></LanForm>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="用户银行信息" key="5">
                    <Table
                      actions={{
                        left: (
                          <ButtonModal
                            buttonProps={{ text: '新增', type: 'primary' }}
                          ></ButtonModal>
                        ),
                      }}
                    ></Table>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="用户联系人信息" key="6">
                    <Table></Table>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="个人扩展信息" key="7">
                    <LanForm
                      configForm={expandForm()}
                      columns={2}
                      labelWidth={170}
                      style={formStyle}
                    ></LanForm>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="用户绑定信息" key="8"></Tabs.TabPane>
                </Tabs>
              </ButtonModal>
              <ButtonModal
                title="修改组别"
                width={700}
                buttonProps={{ text: '修改组别', type: 'primary' }}
              >
                <Form>
                  <Row gutter={24}>
                    <Col span={12}>
                      <Form.Item label="用户职能分类">
                        <Select></Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="承建工程标签">
                        <Select></Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="监管工程标签">
                        <Select></Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="用户权限标签">
                        <Select></Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </ButtonModal>
              <Button
                type="primary"
                danger
                onClick={() => {
                  confirm({
                    // todo 改成统一使用
                    title: '确定删除记录？',
                    icon: <ExclamationCircleFilled />,
                  });
                }}
              >
                删除
              </Button>
            </>
          ),
          right: (
            <Form layout="inline">
              <Form.Item>
                <Checkbox>总览</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={() => {}}>
                  查询
                </Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={() => {}}>重置</Button>
              </Form.Item>
              <Button
                type="link"
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
              >
                {showSearch ? (
                  <>
                    收起&nbsp;
                    <UpOutlined />
                  </>
                ) : (
                  <>
                    展开&nbsp;
                    <DownOutlined />
                  </>
                )}
              </Button>
            </Form>
          ),
        }}
      ></Table>
    </>
  );
};

const formStyle = {
  height: 400,
  overflowY: 'auto',
};

const data = [
  {
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
  },
  {
    a: '个人',
    b: 234432,
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
  },
  {
    a: '个人',
    b: 23423,
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
  },
  {
    a: '个人',
    b: 23402,
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
  },
  {
    a: '个人',
    b: 82342,
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
  },
  {
    a: '个人',
    b: 23742,
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
  },
  {
    a: '个人',
    b: 92342,
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
  },
  {
    a: '个人',
    b: 23642,
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
  },
];
