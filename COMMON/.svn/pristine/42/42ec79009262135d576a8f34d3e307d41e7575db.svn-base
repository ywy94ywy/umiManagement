import React from 'react';
import { Card as AntdCard } from 'antd';
import { CardProps as AntdCardProps } from 'antd/es/card';
import classNames from 'classnames';
import styles from './style.less';

export interface CardProps extends AntdCardProps {
  marginLeft?: Boolean;
  marginTop?: Boolean;
}

const Card: React.FC<CardProps> = ({ className, children, marginLeft, marginTop, ...rest }) => {
  return (
    <AntdCard
      className={classNames(
        marginLeft && styles.cardML,
        marginTop && styles.cardMT,
        className,
      )}
      {...rest}
    >
      {children}
    </AntdCard>
  );
};

export default Card;
