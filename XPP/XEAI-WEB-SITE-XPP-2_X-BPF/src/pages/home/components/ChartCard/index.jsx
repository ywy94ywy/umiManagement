import { Card, Row, Typography } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

const { Text } = Typography;

const ChartCard = ({ className, children, title, action, total, footer, ...rest }) => {
  return (
    <Card
      className={classNames(styles.chartCard, className)}
      bodyStyle={{ padding: '10px 20px' }}
      {...rest}
    >
      <Row justify="space-between">
        <Text type="secondary">{title}</Text>
        <Text type="secondary" className={styles.action}>
          {action}
        </Text>
      </Row>
      {total && <div className={styles.total}>{total}</div>}
      {children && <div className={styles.content}>{children}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </Card>
  );
};

export default ChartCard;
