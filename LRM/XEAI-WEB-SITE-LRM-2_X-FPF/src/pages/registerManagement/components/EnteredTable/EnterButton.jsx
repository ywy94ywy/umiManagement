import { ButtonModal } from 'lanlinker';
import { message, Tree } from 'antd';

export default () => {
  console.log(1)
  return (
    <ButtonModal
      title="选择进场组织"
      buttonProps={{
        text: '批量进场',
        type: 'primary',
      }}
      onOk={(_, close) => {
        message.success('人员进场成功！');
        close();
      }}
    >
      <h3>请选择进场组织</h3>
      <Tree></Tree>
    </ButtonModal>
  );
};
