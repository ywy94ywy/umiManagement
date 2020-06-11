import { useState } from 'react';
import { Form, ButtonModal } from 'lanlinker';
import { Button, Row, Col } from 'antd';
import configForm from './form';

export default ({ form }) => {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <Form
        form={form}
        labelCol={{ flex: '100px' }}
        configForm={configForm({ editing })}
      />
      <Row justify="center" gutter={24}>
        {!editing && (
          <>
            <Col>
              <Button type="primary" onClick={() => setEditing(true)}>
                修改
              </Button>
            </Col>
            <Col>
              <ButtonModal
                title="退卡"
                buttonProps={{ text: '退卡', danger: true, type: 'primary' }}
              >
                <h3
                  style={{
                    color: 'red',
                    margin: '24px auto',
                    textAlign: 'center',
                  }}
                >
                  即将清除卡片授权信息，退卡后将失去出入门区权限！
                </h3>
              </ButtonModal>
            </Col>
          </>
        )}
        {editing && (
          <>
            <Col>
              <Button
                type="primary"
                onClick={async () => {
                  const res = await form.validateFields();
                  console.log(res);
                  setEditing(false);
                }}
              >
                确定
              </Button>
            </Col>
            <Col>
              <Button onClick={() => setEditing(false)}>取消</Button>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};
