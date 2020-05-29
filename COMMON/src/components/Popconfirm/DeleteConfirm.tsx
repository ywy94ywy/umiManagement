import React from 'react';
import Popconfirm, { PopconfirmProps } from './Popconfirm';
import { QuestionCircleOutlined } from '@ant-design/icons';

const DeleteConfirm: React.FC<PopconfirmProps> = props => {
  return (
    <Popconfirm
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      {...props}
    >
      <a href="#">删除</a>
    </Popconfirm>
  );
};

export default DeleteConfirm;
