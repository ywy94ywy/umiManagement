import { Avatar, Col } from 'antd';
import { IconFont } from 'lanlinker';
import VerticalLine from './VerticalLine';
import styles from '../style.less';

const reverseProp = { transform: 'rotateY(180deg)' };

export default ({ title, icon, description, img, reverse }) => (
  <>
    <VerticalLine height={50} />
    <div className={styles.block} style={reverse && reverseProp}>
      <Col className={styles.textWrapper}>
        <Col className={styles.text}>
          <div className={styles.title} style={reverse && reverseProp}>
            <span>{title}</span>
          </div>
          <div
            className={styles.description}
            style={reverse && { ...reverseProp, textAlign: 'left' }}
          >
            {description}
          </div>
        </Col>
        {icon && (
          <Col className={styles.icon} style={reverse && reverseProp}>
            <Avatar IconFont={<IconFont type={icon} />} size={24}></Avatar>
          </Col>
        )}
      </Col>
      <Col className={styles.imgWrapper}>
        <div style={reverse && reverseProp}>
          <img src={img}></img>
        </div>
      </Col>
    </div>
  </>
);
