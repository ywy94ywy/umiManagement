import { useState } from 'react';
import { Typography, Button } from 'antd';
import classNames from 'classnames';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
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
            {expanded ? (
              <>
                <span>收起</span>
                <UpOutlined />
              </>
            ) : (
              <>
                <span>更多</span>
                <DownOutlined />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
