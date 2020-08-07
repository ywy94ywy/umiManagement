import { Row, Col } from 'antd';
import { history } from 'umi';
import classNames from 'classnames';
import styles from './style.less';

export default ({ manuals }) => {
  return manuals.map((item, index) => {
    return (
      <Row justify="space-between" key={index} className={styles.stepWrapper}>
        <Col order={index % 2 ? 3 : 1} className={styles.col1}>
          <div className={styles.title}>
            <img src={item.step} className={styles.step} alt="步骤"></img>
            <span>{item.title}</span>
          </div>
          <div className={styles.description}>{item.description}</div>
        </Col>
        <Col
          order={2}
          className={classNames(styles.col2, item.url ? styles.link : '')}
          onClick={() => {
            if (item.url) {
              history.push(item.url);
            }
          }}
        >
          <img src={item.manual} className={styles.manualPic} alt="图示"></img>
        </Col>
      </Row>
    );
  });
};
