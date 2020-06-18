import { Button, Modal } from 'antd';

export default () => {
  return (
    <Button
      type="primary"
      danger
      onClick={() => {
        Modal.confirm({
          title: '选中3条记录，是否退场？',
        });
      }}
    >
      批量退场
    </Button>
  );
};
