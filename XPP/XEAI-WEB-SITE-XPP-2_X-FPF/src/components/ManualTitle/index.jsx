/**
 * @module 主页管理中的title
 * @author DesYang
 */
import styles from './style.less';

export default ({ title, subtitle }) => {
  return (
    <header className={styles.title}>
      <div className={styles.withLine}>{title}</div>
      <span>{subtitle}</span>
    </header>
  );
};
