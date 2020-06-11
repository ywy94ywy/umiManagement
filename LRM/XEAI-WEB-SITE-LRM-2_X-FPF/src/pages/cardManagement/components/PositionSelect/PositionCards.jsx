import { useState } from 'react';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import styles from './style.less';

const AREA = ['宿舍区南门', '宿舍区北门', '施工区南门', '施工区北门'];

export default ({ value = [], onChange } = {}) => {
  const [activeList, setActiveList] = useState(value || []);
  const controll = value || activeList;
  
  return (
    <Row gutter={[24, 24]}>
      {AREA.map((v, i) => {
        return (
          <Col span={6} key={i}>
            <div
              className={classNames(
                styles.card,
                controll.includes(v) && styles.active,
              )}
              onClick={() => {
                let temp;
                if (controll.includes(v)) {
                  temp = controll.filter(name => name !== v);
                } else {
                  temp = [...controll, v];
                }
                setActiveList(temp);
                onChange(temp);
              }}
            >
              {v}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
