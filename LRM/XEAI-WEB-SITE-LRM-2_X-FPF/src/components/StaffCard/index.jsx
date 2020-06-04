import { Card, List, Button } from 'antd';
import profile from './profile.png';
import styles from './style.less';

export default ({ children, title, buttonProps = {}, staffInfo = {} }) => {
  const { name = '姓名', post = '岗位', company, team, group } = staffInfo;
  const { text, ...buttonRest } = buttonProps;
  return (
    <Card size="small" className={styles.card}>
      <List.Item className={styles.listItem}>
        <List.Item.Meta
          avatar={<img src={profile} alt="头像" className={styles.profile} />}
          title={name}
          description={
            <>
              <p title={post} className={styles.detail}>
                {post}
              </p>
              <div title={company} className={styles.detail}>
                劳务公司：{company}
              </div>
              <div title={team} className={styles.detail}>
                劳务队伍：{team}
              </div>
              <div title={group} className={styles.detail}>
                劳务班组：{group}
              </div>
            </>
          }
        />
        {text && (
          <Button
            type="primary"
            size="small"
            className={styles.btn}
            {...buttonRest}
          >
            {text}
          </Button>
        )}
      </List.Item>
      {title && <h3>{title}</h3>}
      {children}
    </Card>
  );
};
