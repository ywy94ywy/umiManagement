import React, { useState } from 'react';
import { IconFont } from 'lanlinker';
import { Typography, Button } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

const SearchBar = ({ label, extensible, bordered = true, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={classNames(styles.searchBar, !bordered && styles.noBorder)}>
      <Typography.Text type="secondary" className={styles.label}>
        {label}
      </Typography.Text>

      <div className={styles.content}>
        <div
          className={!extensible || expanded ? styles.expanded : styles.narrow}
        >
          {children}
        </div>
        {extensible && (
          <Button
            type="link"
            className={styles.more}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            {expanded ? '收起 ' : '更多 '}
            <IconFont type={`icon-${expanded ? 'up' : 'down'}`}></IconFont>
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
