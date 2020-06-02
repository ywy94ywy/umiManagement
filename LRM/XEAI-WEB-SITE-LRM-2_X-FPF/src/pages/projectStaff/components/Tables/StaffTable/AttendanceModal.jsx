import { Form } from 'lanlinker';
import { Descriptions, Space, DatePicker } from 'antd';

const { MonthPicker } = DatePicker;

export default ({ record }) => {
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Form columns={4}>
        <Form.Item label="工资发放月份">
          <MonthPicker />
        </Form.Item>
        <Form.Item label="姓名">xxx</Form.Item>
        <Form.Item label="身份证号">xxx</Form.Item>
        <Form.Item label="银行名称">xxx</Form.Item>
        <Form.Item label="银行账号">xxx</Form.Item>
        <Form.Item label="岗位">xxx</Form.Item>
        <Form.Item label="劳务类型">xxx</Form.Item>
        <Form.Item label="劳务公司">xxx</Form.Item>
        <Form.Item label="劳务队伍">xxx</Form.Item>
        <Form.Item label="劳务班组">xxx</Form.Item>
        <Form.Item label="劳务班组长联系电话">xxx</Form.Item>
      </Form>
      <Descriptions
        layout="vertical"
        bordered
        column={5}
        style={{ width: '80%', margin: '0 auto' }}
      >
        <Descriptions.Item label="出勤工时">21</Descriptions.Item>
        <Descriptions.Item label="出勤天数">21</Descriptions.Item>
        <Descriptions.Item label="计量单位">21</Descriptions.Item>
        <Descriptions.Item label="计量单位">21</Descriptions.Item>
        <Descriptions.Item label="基本工资金额">21</Descriptions.Item>
        <Descriptions.Item label="岗位工资金额">21</Descriptions.Item>
        <Descriptions.Item label="绩效工资金额">21</Descriptions.Item>
        <Descriptions.Item label="奖金金额">21</Descriptions.Item>
        <Descriptions.Item label="津贴金额">21</Descriptions.Item>
        <Descriptions.Item label="补贴金额">21</Descriptions.Item>
        <Descriptions.Item label="加班工资金额">21</Descriptions.Item>
        <Descriptions.Item label="应发其他金额">21</Descriptions.Item>
        <Descriptions.Item label="应发金额">21</Descriptions.Item>
        <Descriptions.Item label="生活费">21</Descriptions.Item>
        <Descriptions.Item label="住宿费">21</Descriptions.Item>
        <Descriptions.Item label="电费">21</Descriptions.Item>
        <Descriptions.Item label="其他费用">21</Descriptions.Item>
        <Descriptions.Item label="预支金额">21</Descriptions.Item>
        <Descriptions.Item label="罚款">21</Descriptions.Item>
        <Descriptions.Item label="应扣金额">21</Descriptions.Item>
      </Descriptions>
      ,
    </Space>
  );
};
