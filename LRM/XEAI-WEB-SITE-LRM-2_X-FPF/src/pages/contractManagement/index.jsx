/**
 * @page 合同管理
 * @todo 高拍仪上传
 */
import { useState } from 'react';
import { Select, Card, Input, Button, Row, Col, Form, TreeSelect } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import ContractTable from './components/ContractTable';
import ContractCard from './components/ContractCard';
import StaffCard from '@/components/StaffCard';

export default () => {
  const [contract, setContract] = useState();
  const [editing, setEditing] = useState(false);

  return (
    <PageHeaderWrapper>
      <Card>
        <Row gutter={[24, 12]}>
          <Col span={24}>
            <Row justify="end">
              <Form layout="inline" initialValues={{ a: '1', b: '1' }}>
                <Form.Item label="组织名称">
                  <TreeSelect></TreeSelect>
                </Form.Item>
                <Form.Item label="劳动合同状态" name="b">
                  <Select>
                    <Select.Option value="1">未签劳动合同</Select.Option>
                    <Select.Option value="2">已签劳动合同</Select.Option>
                    <Select.Option value="3">即将到期劳动合同</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <InputWrapper />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">查询</Button>
                </Form.Item>
                <Form.Item>
                  <Button>重置</Button>
                </Form.Item>
              </Form>
            </Row>
          </Col>
          <Col flex="1" style={{ overflow: 'hidden' }}>
            <ContractTable
              rowKey="id"
              dataSource={[{ id: '123', a: '123' }]}
              onRow={record => ({
                onClick() {
                  setContract({
                    buttonText: '签订劳动合同',
                  });
                },
              })}
            />
          </Col>
          <Col flex="340px" style={{ overflow: 'hidden' }}>
            <StaffCard
              title="合同文件"
              buttonProps={
                contract?.buttonText && {
                  text: contract.buttonText,
                  disabled: editing,
                  onClick() {
                    setEditing(true);
                  },
                }
              }
            >
              {contract && (
                <ContractCard editing={editing} setEditing={setEditing} />
              )}
            </StaffCard>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
};

const InputWrapper = () => {
  const holder = {
    '1': '请输入姓名',
    '2': '请输入身份证号',
  };
  const [placeholder, setPlaceHolder] = useState(holder['1']);

  return (
    <Input
      addonBefore={
        <Form.Item noStyle name="a">
          <Select
            onSelect={e => setPlaceHolder(holder[e])}
            style={{ width: 100 }}
          >
            <Select.Option value="1">姓名</Select.Option>
            <Select.Option value="2">身份证号</Select.Option>
          </Select>
        </Form.Item>
      }
      placeholder={placeholder}
    ></Input>
  );
};
