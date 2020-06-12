import React from 'react';
import BankCard from '../BankCard';
import { PlusOutlined } from '@ant-design/icons';
import styles from './style.less';

const List: React.FC<{
  data: any[];
  onDelete: (e: React.MouseEvent) => void; // 删除按钮
  onUpdate: (e: React.MouseEvent) => void; // 修改按钮
  onCreate: (e: React.MouseEvent) => void; // 添加按钮
  disabled: boolean;
  maxLength: number; // 卡片最多数量
}> = ({
  data = [],
  onDelete,
  onUpdate,
  onCreate,
  disabled = false,
  maxLength = 1000,
}) => {
  let defaultCard = data.sort(
    (a, b) =>
      b.userBankAccountNumberIsDefault - a.userBankAccountNumberIsDefault,
  );
  if (maxLength < data.length) {
    // 超出部分隐藏
    defaultCard = defaultCard.slice(0, maxLength);
  }

  return (
    <div className={styles.layout}>
      {defaultCard.map((v, i) => (
        <BankCard
          key={i}
          title={v.userBankName}
          code={v.code}
          number={v.userBankAccountNumber}
          isDefault={v.userBankAccountNumberIsDefault}
          onDelete={onDelete}
          onUpdate={onUpdate}
          disabled={disabled}
        />
      ))}
      {maxLength > data.length && (
        <div
          className={styles.empty}
          onClick={e => !disabled && onCreate && onCreate(e)}
          style={{ cursor: disabled ? 'no-drop' : 'pointer' }}
        >
          <PlusOutlined />
        </div>
      )}
    </div>
  );
};

export default List;
