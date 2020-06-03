import { Modal } from 'lanlinker';
import { Form } from 'lanlinker';
import { Descriptions, Space, DatePicker } from 'antd';

const { MonthPicker } = DatePicker;

export default ({ record }) => {
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Form columns={4}>
        <Form.Item label="统计月份">
          <MonthPicker />
        </Form.Item>
        <Form.Item label="姓名">xxx</Form.Item>
        <Form.Item label="身份证号">xxx</Form.Item>
        <Form.Item label="日平均值">xxx</Form.Item>
        <Form.Item label="小计值">xxx</Form.Item>
      </Form>
      <Descriptions
        layout="vertical"
        bordered
        column={7}
        style={{ width: '80%', margin: '0 auto' }}
      >
        {new Array(31).fill(1).map((v, i) => {
          const day = (i + 1 + '').padStart(2, '0') + '日';
          return (
            <Descriptions.Item label={day} key={i} span={1}>
              {i}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    </Space>
  );
};
