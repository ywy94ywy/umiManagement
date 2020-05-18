/**
 * @module 租户管理-租户执照管理
 */
import { PageHeaderWrapper, Card, Table, ButtonModal } from 'lanlinker';
import { Button, Input, Form, Select, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import DataManagement from '@/components/DataManagement';

const { confirm } = Modal;

export default () => {
  const [addLicenseForm] = Form.useForm();
  const [renewLicenseForm] = Form.useForm();

  const columns = [
    {
      title: '系统名称',
      dataIndex: 'a',
    },
    {
      title: '激活码编号',
      dataIndex: 'b',
    },
    {
      title: '授权类型',
      dataIndex: 'c',
    },
    {
      title: '剩余时间',
      dataIndex: 'b',
    },
    {
      title: '激活日期',
      dataIndex: 'b',
    },
    {
      title: '续费操作',
      render() {
        return (
          <>
            <ButtonModal title="详情" width={600} buttonProps={{ text: '详情', type: 'link' }}>
              <Form style={{ width: '80%', margin: '0 auto' }}>
                <Form.Item label="系统名称">劳务实名制管理系统</Form.Item>
                <Form.Item label="绑定工程">吾悦广场1～7号楼工程</Form.Item>
                <Form.Item label="所属项目">吾悦广场项目</Form.Item>
              </Form>
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

  return (
    <PageHeaderWrapper>
      <Card title="执照详细列表">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={fakeData}
          actions={{
            left: (
              <ButtonModal
                title="新增执照"
                onOk={async (e, close) => {
                  const res = await addLicenseForm.validateFields();
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
                buttonProps={{ text: '新增', type: 'primary' }}
              >
                <Form form={addLicenseForm}>
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
            ),
            right: (
              <Form layout="inline">
                <Form.Item label="系统名称">
                  <Select></Select>
                </Form.Item>
                <Form.Item label="剩余有效时间">
                  <Select></Select>
                </Form.Item>
                <Form.Item>
                  <Input placeholder="请输入要查询的关键字"></Input>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">查询</Button>
                </Form.Item>
              </Form>
            ),
          }}
        ></Table>
      </Card>
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

const fakeData = [];

for (let i = 0; i < 10; i++) {
  fakeData.push({
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    id: i,
  });
}
