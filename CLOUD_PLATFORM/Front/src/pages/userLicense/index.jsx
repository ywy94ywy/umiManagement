/**
 * @page 用户执照管理
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Collapse } from 'antd';
import Applied from './Applied';
import Unapplied from './Unapplied';
import styles from './style.less';

const APPLIED = '已申请系统';
const UNAPPLIED = '未申请系统';

export default () => {
  return (
    <PageHeaderWrapper className={styles.userLicense}>
      <Collapse defaultActiveKey={[APPLIED, UNAPPLIED]}>
        <Collapse.Panel header={APPLIED} key={APPLIED}>
          <div className={styles.panel}>
            <Applied />
          </div>
        </Collapse.Panel>
        <Collapse.Panel header={UNAPPLIED} key={UNAPPLIED}>
          <div className={styles.panel}>
            <Unapplied />
          </div>
        </Collapse.Panel>
      </Collapse>
    </PageHeaderWrapper>
  );
};
