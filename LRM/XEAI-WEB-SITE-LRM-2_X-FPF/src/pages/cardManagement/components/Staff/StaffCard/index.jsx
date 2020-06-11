import { IconFont } from 'lanlinker';
import { List, Button, Space } from 'antd';
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
          actions: (
            <>
              <Button type="primary" size="small">
                制卡
              </Button>
            </>
          ),
        },
        {
          title: '人脸识别',
          icon: '&#xe662;',
          desc: '卡号：124125',
          actions: (
            <>
              <Button type="primary" size="small" danger>
                退卡
              </Button>
              <Button danger size="small">
                冻结
              </Button>
              <Button type="primary" size="small">
                修改
              </Button>
            </>
          ),
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
