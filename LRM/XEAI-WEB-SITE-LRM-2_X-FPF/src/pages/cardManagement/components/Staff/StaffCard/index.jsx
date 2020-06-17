import { IconFont } from 'lanlinker';
import { List, Space } from 'antd';
import ICCardAction from './ICCardAction';
import AFRAction from './AFRAction';
import styles from './style.less';

export default () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          title: 'IC卡',
          icon: '&#xe835;',
          desc: '卡号：124125',
          actions: <ICCardAction status="1" />,
        },
        {
          title: '人脸识别',
          icon: '&#xe662;',
          desc: '卡号：124125',
          actions: <AFRAction status="1" />,
        },
      ]}
      className={styles.cardsList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<IconFont type={item.icon} className={styles.cardIcon} />}
            title={<span className={styles.title}>{item.title}</span>}
            description={
              <>
                <p>{item.desc}</p>
                <Space>{item.actions}</Space>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};
