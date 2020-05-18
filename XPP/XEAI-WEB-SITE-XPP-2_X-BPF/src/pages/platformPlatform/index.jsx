/**
 * @module 平台管理-平台执照管理
 */
import { PageHeaderWrapper, Card, Table, ButtonModal } from 'lanlinker';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Modal } from 'antd';
import DataManagement from '@/components/DataManagement';

const { confirm } = Modal;

export default () => {
  const [addLicenseForm] = Form.useForm();

  return (
    <PageHeaderWrapper>
      <Card title="平台详细列表">
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

const columns = [
  {
    title: '平台名称',
    dataIndex: 'a',
  },
  {
    title: '端类型',
    dataIndex: 'b',
  },
  {
    title: '平台版本',
    dataIndex: 'c',
  },
  {
    title: '启用日期',
    dataIndex: 'd',
  },
  {
    title: '失效日期',
    dataIndex: 'e',
  },
  {
    title: '操作',
    render() {
      return (
        <>
          <ButtonModal buttonProps={{ text: '编辑', type: 'link' }}></ButtonModal>
          <ButtonModal buttonProps={{ text: '发布', type: 'link' }}></ButtonModal>
        </>
      );
    },
  },
];

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
