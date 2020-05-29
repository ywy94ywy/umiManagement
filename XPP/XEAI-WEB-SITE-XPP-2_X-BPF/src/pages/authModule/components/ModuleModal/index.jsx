import { ButtonModal, Form } from 'lanlinker';
import { Tabs } from 'antd';
import moduleForm from '../../forms/module';
import accountForm from '../../forms/account';
import baseForm from '../../forms/base';

const layout = {
  labelCol: { flex: '0 0 150px' },
};

export default ({ title, buttonProps, disabled = false }) => {
  return (
    <ButtonModal
      title={title}
      width={1000}
      bodyStyle={{
        height: 600,
        overflow: 'auto',
      }}
      buttonProps={buttonProps}
    >
      <div style={{ margin: '0 auto', width: '80%' }}>
        <Form configForm={moduleForm()} columns={2} {...layout}></Form>
        <Tabs>
          <Tabs.TabPane tab="账号信息" key="账号信息">
            <Form configForm={accountForm()} columns={2} {...layout}></Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="基本信息" key="账号信息">
            <Form configForm={baseForm()} {...layout}></Form>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </ButtonModal>
  );
};
