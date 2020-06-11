import React from 'react';
import classNames from 'classnames';

const IconFont: React.FC<{
  type: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ type, className, style }) => {
  return (
    <i
      className={classNames('iconfont', className)}
      style={style}
      dangerouslySetInnerHTML={{ __html: type }}
    />
  );
};

export default IconFont;
