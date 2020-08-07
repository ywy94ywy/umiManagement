import { Row, List, Avatar } from 'antd';
import styles from './style.less';

export default ({ data = [] }) => {
  const rows = Math.ceil(data.length / 2);
  const list = [];
  for (let i = 0; i < rows; i++) {
    const ListRow = () => {
      return (
        <Row key={i} type="flex" justify="space-between" className={styles.listWrapper}>
          {data.slice(i * 2, (i + 1) * 2).map((item, index) => {
            return (
              <List.Item className={styles.listItem} key={index}>
                <List.Item.Meta
                  avatar={<Avatar shape="square" size={90} src={item.pic} />}
                  title={item.title}
                  description={item.content}
                />
              </List.Item>
            );
          })}
        </Row>
      );
    };
    list.push(<ListRow key={i} />);
  }
  return list;
};
