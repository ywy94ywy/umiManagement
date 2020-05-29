import { Avatar } from 'antd';
import { IconFont } from 'lanlinker';
import VerticalLine from './VerticalLine';
import styles from './style.less';

const reverseProp = { transform: 'rotateY(180deg)' };

export default ({ title, iconFont, description, img, reverse }) => (
  <>
    <VerticalLine height={50} />
    <div className={styles.block} style={reverse && reverseProp}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.title} style={reverse && reverseProp}>
            <span>{title}</span>
          </div>
          <div
            className={styles.description}
            style={reverse && { ...reverseProp, textAlign: 'left' }}
          >
            {description}
          </div>
        </div>
        {iconFont && (
          <div className={styles.icon} style={reverse && reverseProp}>
            <Avatar icon={<IconFont type={iconFont} />} size={30}></Avatar>
          </div>
        )}
      </div>
      <div className={styles.imgWrapper}>
        <div style={reverse && reverseProp}>
          <img src={img} alt={title}></img>
        </div>
      </div>
    </div>
  </>
);
