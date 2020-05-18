import React from 'react';
import { Row as AntdRow } from 'antd';
import { RowProps } from 'antd/es/Row';

const Row: React.FC<RowProps> = ({ children, ...rest }) => {
  return (
    <AntdRow gutter={[24, 24]} {...rest}>
      {children}
    </AntdRow>
  );
};

export default Row;
