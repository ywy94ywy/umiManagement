/**
 * @module 刷卡流水查询
 */
import { PageHeaderWrapper, Table, ButtonModal } from 'lanlinker';
import { Form, Button, Input, Select, DatePicker, Card } from 'antd';

const { RangePicker } = DatePicker;

export default () => {
  return (
    <PageHeaderWrapper>
      <Card>
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={columns}
          actions={{
            right: (
              <Form layout="inline" initialValues={{ a: '1', b: '1', c: '1' }}>
                <Form.Item label="通勤标志" name="b">
                  <Select>
                    <Select.Option value="1">入场</Select.Option>
                    <Select.Option value="2">出场</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="通勤类型" name="c">
                  <Select>
                    <Select.Option value="1">固定闸机</Select.Option>
                    <Select.Option value="2">移动考勤</Select.Option>
                    <Select.Option value="3">手工补录</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="通勤时间">
                  <RangePicker style={{ width: 220 }}></RangePicker>
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder="请输入流水编码"
                    addonBefore={
                      <Form.Item noStyle name="a">
                        <Select style={{ width: 100 }}>
                          <Select.Option value="1">流水编码</Select.Option>
                          <Select.Option value="2">姓名</Select.Option>
                          <Select.Option value="3">身份证号</Select.Option>
                        </Select>
                      </Form.Item>
                    }
                  ></Input>
                </Form.Item>
                <Form.Item>
                  <Button type="primary">查询</Button>
                </Form.Item>
                <Form.Item>
                  <Button>重置</Button>
                </Form.Item>
              </Form>
            ),
          }}
        ></Table>
      </Card>
    </PageHeaderWrapper>
  );
};

const dataSource = [{ id: '1', a: '1' }];

const columns = [
  {
    title: '流水编号',
    dataIndex: 'a',
    width: 130,
    ellipsis: true,
  },
  {
    title: '通勤时间',
    width: 150,
    ellipsis: true,
  },
  {
    title: '通勤标志',
    width: 100,
    ellipsis: true,
  },
  {
    title: '通勤类型',
    width: 120,
    ellipsis: true,
  },
  {
    title: '姓名',
    width: 120,
    ellipsis: true,
  },
  {
    title: '身份证号',
    width: 130,
    ellipsis: true,
  },
  {
    title: '详情',
    width: 100,
    render() {
      return (
        <ButtonModal
          title="刷卡照片"
          footer={null}
          buttonProps={{ text: '查看详情', type: 'link' }}
        >
          图片
        </ButtonModal>
      );
    },
  },
];
