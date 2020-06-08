/**
 * @module 修改窗口
 */
import { Form } from 'lanlinker';
import { goodForm } from '../config';

export default () => {
  const updateForm = [
    {
      label: '涉事人员',
      component: <span>XXX</span>,
    },
    {
      label: '身份证号',
      component: <span>XXX</span>,
    },
    ...goodForm,
  ];

  return (
    <div style={{ height: 600, overflow: 'auto' }}>
      <Form
        columns={2}
        configForm={updateForm}
        style={{ width: '80%', margin: '24px auto' }}
        labelCol={{ flex: '120px' }}
      />
    </div>
  );
};
