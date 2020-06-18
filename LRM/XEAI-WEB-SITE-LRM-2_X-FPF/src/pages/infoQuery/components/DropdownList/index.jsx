import { useState, Fragment } from 'react';
import { IconFont } from 'lanlinker';
import { Card, Row } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './style.less';

const DropdownList = ({ title = [], content = [] }) => {
  const [selected, setSelected] = useState('');

  return (
    <Row className={styles.dropdownList}>
      {title.map((v, i) => {
        const current = v === selected;
        return (
          <Fragment key={v}>
            <div
              onClick={() => {
                setSelected(current ? '' : v);
              }}
              className={classNames(styles.label, current && styles.active)}
            >
              {title[i]}&nbsp;
              {current === 'up' ? <UpOutlined /> : <DownOutlined />}
            </div>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={classNames(styles.dropdown, !current && styles.hidden)}
            >
              {content[i]}
            </Card>
          </Fragment>
        );
      })}
    </Row>
  );
};

export default DropdownList;
