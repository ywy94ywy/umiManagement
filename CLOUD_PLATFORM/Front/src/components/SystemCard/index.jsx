/**
 * @module 申请系统卡片
 */
import { IconFont } from 'lanlinker';
import { List, Avatar } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

const SystemCard = ({
  title,
  subtitle,
  icon,
  iconBg,
  tooltip,
  description,
  grey = false,
  actions = [],
}) => {
  const greyStyle = grey ? styles.greyfilter : '';

  return (
    <List
      className={styles.systemCard}
      footer={
        <div className={styles.footer}>
          {actions.map((item, index) => (
            <div className={styles.item} key={index}>
              {item}
            </div>
          ))}
        </div>
      }
    >
      <List.Item className={styles.header}>
        <div className={styles.info}>
          <span>{tooltip}</span>
        </div>
        <List.Item.Meta
          avatar={
            <Avatar
              icon={<IconFont type={icon} style={{ fontSize: 30 }} />}
              style={{ background: iconBg }}
              size={48}
              className={greyStyle}
            />
          }
          title={
            <>
              <div
                className={classNames(styles.title, greyStyle)}
                title={title}
              >
                {title}
              </div>
              <div
                className={classNames(styles.subtitle, greyStyle)}
                title={subtitle}
              >
                {subtitle}
              </div>
            </>
          }
          description={
            <div
              className={classNames(styles.license, greyStyle)}
              title={description}
            >
              {description}
            </div>
          }
        />
      </List.Item>
    </List>
  );
};

export default SystemCard;
