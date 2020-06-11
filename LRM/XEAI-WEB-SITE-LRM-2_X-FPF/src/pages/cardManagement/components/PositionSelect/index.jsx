import { useState } from 'react';
import { ButtonModal } from 'lanlinker';
import PositionCards from './PositionCards';

export default ({ disabled, value = [], onChange }) => {
  const [position, setPosition] = useState(value);

  return (
    <ButtonModal
      title="授权位置权限"
      width={600}
      buttonProps={{
        text: '选择位置',
        type: 'primary',
        disabled,
        block: true,
      }}
      onOk={(_, close) => {
        onChange(position);
        close();
      }}
      onCancel={() => {
        setPosition(value);
      }}
    >
      <PositionCards value={position} onChange={setPosition} />
    </ButtonModal>
  );
};
