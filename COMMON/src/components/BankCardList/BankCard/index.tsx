import React from 'react';
import { STATIC_IMAGE } from '../../../config';
import styles from './style.less';

const BankCard: React.FC<{
  code: string; // 银行卡id
  title: string; // 银行卡名称
  number: string; // 卡号
  isDefault: boolean; // 是否默认
  disabled: boolean; // 是否可编辑
  onDelete: (e: React.MouseEvent) => void; // 删除按钮
  onUpdate: (e: React.MouseEvent) => void; // 修改按钮
}> = ({
  code,
  title,
  // type,
  number,
  isDefault = false,
  disabled = false,
  onDelete,
  onUpdate,
}) => {
  const item = bankMap[code] || bankMap.other;

  return (
    <div className={styles.bankCard}>
      <header style={{ backgroundImage: `url(${item.background})` }}>
        <div className={styles.title}>
          <img className={styles.logo} src={item.logo} alt="logo" />
          <div>
            <div className={styles.name} title={title}>
              {title}
            </div>
            {/* <div className={styles.type}>{type}</div> */}
          </div>
          {isDefault && <span className={styles.default}>默认</span>}
        </div>
        <div className={styles.number}>{encrypt(number)}</div>
      </header>
      <footer>
        <span
          onClick={e => !disabled && onDelete && onDelete(e)}
          style={{ cursor: disabled ? 'no-drop' : 'pointer' }}
        >
          删除
        </span>
        <span
          onClick={e => !disabled && onUpdate && onUpdate(e)}
          style={{ cursor: disabled ? 'no-drop' : 'pointer' }}
        >
          修改
        </span>
      </footer>
    </div>
  );
};

export default BankCard;

// 卡号加密及格式化
const encrypt = (number: string = '') => {
  return number.replace(/(\w{1,4})/g, '$1 ');
};

const bankMap: any = {
  a: {
    title: '中国农业银行',
    logo: STATIC_IMAGE + '/bank/nongye_logo.png',
    background: STATIC_IMAGE + '/bank/nongye_bg.png',
  },
  b: {
    title: '中国工商银行',
    logo: STATIC_IMAGE + '/bank/gongshang_logo.png',
    background: STATIC_IMAGE + '/bank/gongshang_bg.png',
  },
  c: {
    title: '中国银行',
    logo: STATIC_IMAGE + '/bank/zhongguo_logo.png',
    background: STATIC_IMAGE + '/bank/zhongguo_bg.png',
  },
  d: {
    title: '中国建设银行',
    logo: STATIC_IMAGE + '/bank/jianshe_logo.png',
    background: STATIC_IMAGE + '/bank/jianshe_bg.png',
  },
  e: {
    title: '招商银行',
    logo: STATIC_IMAGE + '/bank/zhaoshang_logo.png',
    background: STATIC_IMAGE + '/bank/zhaoshang_bg.png',
  },
  g: {
    title: '中国邮政储蓄银行',
    logo: STATIC_IMAGE + '/bank/youzheng_logo.png',
    background: STATIC_IMAGE + '/bank/youzheng_bg.png',
  },
  h: {
    title: '交通银行',
    logo: STATIC_IMAGE + '/bank/jiaotong_logo.png',
    background: STATIC_IMAGE + '/bank/jiaotong_bg.png',
  },
  other: {
    title: '其他银行',
    logo: STATIC_IMAGE + '/bank/other_logo.png',
    background: STATIC_IMAGE + '/bank/other_bg.png',
  },
};
