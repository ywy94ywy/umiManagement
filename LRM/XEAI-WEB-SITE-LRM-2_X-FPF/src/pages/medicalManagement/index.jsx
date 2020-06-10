/**
 * @page 体检管理
 * @todo 高拍仪上传，体检报告附件
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card, Input, Button, Select, Form, Row, Col, TreeSelect } from 'antd';
import MedicalTable from './components/MedicalTable';
import MedicalDetails from './components/MedicalDetails';

export default () => {
  const [list, setList] = useState();

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
                    <Select.Option value="1">全部人员</Select.Option>
                    <Select.Option value="2">已体检</Select.Option>
                    <Select.Option value="3">未体检</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <InputWrapper></InputWrapper>
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
            <MedicalTable setList={setList} />
          </Col>
          <Col flex="340px" style={{ overflow: 'hidden' }}>
            <MedicalDetails list={list} />
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
