/**
 * @module 数据管理
 * @author DesYang
 */
import { Row } from 'antd';
import { IconFont } from 'lanlinker';
import styles from './style.less';

export default ({ onClicks = {} }) => {
  return (
    <Row justify="space-around" className={styles.dataManagement}>
      {cards.map(({ name, title, icon, background }, i) => {
        const fn = onClicks[name];
        return (
          <div
            className={styles.optionCard}
            style={fn ? { background } : { background: '#D9D9D9', cursor: 'not-allowed' }}
            key={i}
            onClick={() => {
              if (fn) {
                fn();
              }
            }}
          >
            <IconFont type={icon}></IconFont>
            <div className={styles.text}>{title}</div>
          </div>
        );
      })}
    </Row>
  );
};

const cards = [
  {
    name: 'importClassify',
    title: '审核',
    icon: 'icon-all',
    background: '#0E6059',
  },
  {
    name: 'exportTags',
    title: '实名认证方式设置',
    icon: 'icon-all',
    background: '#1890FF',
  },
  {
    name: 'importUsers',
    title: '导入用户数据',
    icon: 'icon-all',
    background: '#45B5AF',
  },
  {
    name: 'exportUsers',
    title: '导出用户数据',
    icon: 'icon-all',
    background: '#ABD598',
  },
  {
    name: 'importLicense',
    title: '导入系统执照',
    icon: 'icon-all',
    background: '#EBB2F8',
  },
  {
    name: 'licenseRecords',
    title: '执照授权记录',
    icon: 'icon-all',
    background: '#FBB44B',
  },
];
