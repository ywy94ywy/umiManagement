import { List } from 'antd';
import classNames from 'classnames';
import styles from './style.less';

export default ({ className, data = [] }) => (
  <List
    dataSource={data}
    className={classNames(styles.listWrapper, className)}
    renderItem={item => (
      <List.Item actions={item.actions}>
        <List.Item.Meta title={item.title} description={item.description} />
      </List.Item>
    )}
  />
);
