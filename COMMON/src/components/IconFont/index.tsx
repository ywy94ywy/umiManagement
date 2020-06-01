// todo 写进配置
// import { createFromIconfontCN } from '@ant-design/icons';

// const IconFont: any = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_1430254_kz3h1895wuq.js',
// });

// export default IconFont;

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
