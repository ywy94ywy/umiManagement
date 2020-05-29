/**
 * @module 平台管理-平台执照管理
 * @todo confim公共
 * @todo 新增、编辑、发布按钮原型无，编辑按钮和租户执照管理的续费貌似一样？
 */
import { PageHeaderWrapper, Card, Table, ButtonModal } from 'lanlinker';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, Modal, Row, Col } from 'antd';
import DataManagement from '@/components/DataManagement';

const { confirm } = Modal;

export default () => {
  const [formCreate] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const columns = [
    {
      title: '平台名称',
      dataIndex: 'a',
      width: 200,
      ellipsis: true,
    },
    {
      title: '端类型',
      dataIndex: 'b',
      align: 'center',
      width: 130,
      ellipsis: true,
    },
    {
      title: '平台版本',
      dataIndex: 'c',
      align: 'center',
      width: 130,
      ellipsis: true,
    },
    {
      title: '启用日期',
      dataIndex: 'd',
      width: 130,
      ellipsis: true,
    },
    {
      title: '失效日期',
      dataIndex: 'e',
      width: 130,
      ellipsis: true,
    },
    {
      title: '操作',
      align: 'center',
      width: 130,
      render() {
        return (
          <>
            <ButtonModal
              title="新增执照"
              onOk={async (e, close) => {
                const res = await formUpdate.validateFields();
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
              buttonProps={{ text: '编辑', type: 'link', size: 'small' }}
            >
              <Form form={formUpdate}>
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
            <ButtonModal buttonProps={{ text: '发布', type: 'link', size: 'small' }}></ButtonModal>
          </>
        );
      },
    },
  ];

  return (
    <PageHeaderWrapper>
      <Row gutter={[24, 24]}>
        <Col span={24}>
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
                      const res = await formCreate.validateFields();
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
                    <Form form={formCreate}>
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
        </Col>
        <Col span={24}>
          <Card title="数据管理">
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
        </Col>
      </Row>
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
