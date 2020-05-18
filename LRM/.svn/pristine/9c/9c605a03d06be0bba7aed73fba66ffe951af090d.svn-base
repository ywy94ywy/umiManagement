import React, { useState, Fragment } from 'react';
import { IconFont } from 'lanlinker';
import { Card, Row } from 'antd';
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
              {title[i]}
              <IconFont
                type={`icon-${current ? 'up' : 'down'}`}
                style={{ marginLeft: 5 }}
              ></IconFont>
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
