import React from 'react';
import styles from './user.less';
import logo from './logo.png';

export default ({ children }) => {
  return (
    <div className={styles.user}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      {children}
      <footer>
        <p>版权所有 © 蓝瓴信息科技(上海)有限公司 沪ICP备17029861号-1</p>
        <p>
          Copyright © Lanling information technology (Shanghai) Co., Ltd.
          Shanghai ICP 17029861-1
        </p>
      </footer>
    </div>
  );
};
