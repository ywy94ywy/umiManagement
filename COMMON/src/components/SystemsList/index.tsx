/**
 * @module 系统列表
 */
import React, { useState } from 'react';
import { Input } from 'antd';
import { SwitchSystemsProps } from '../SwitchSystems';
import IconFont from '../IconFont';
import classNames from 'classnames';
import styles from './style.less';

export interface SystemsListProps extends Pick<SwitchSystemsProps, 'onSelect'> {
  list: any[];
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  titleKey?: string;
  iconKey?: string;
  iconBgKey?: string;
}

const SystemsList: React.FC<SystemsListProps> = ({
  list,
  onSelect,
  titleKey = 'name',
  iconKey = 'iconUnicode',
  iconBgKey = 'iconColor',
  style,
  className,
  height = 400,
}) => {
  const [nextList, setNextList] = useState(list);
  const [flag, setFlag] = useState(false); // 输入法控制

  const handleChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      setNextList(list.filter(v => v[titleKey].includes(value)));
    } else {
      setNextList(list);
    }
  };

  return (
    <>
      <Input.Search
        placeholder="请输入系统名称关键字"
        onCompositionStart={() => {
          setFlag(true);
        }}
        onCompositionEnd={e => {
          if (flag) {
            handleChange(e);
          }
          setFlag(false);
        }}
        onChange={e => {
          if (!flag) {
            handleChange(e);
          }
        }}
      />
      <div
        style={{ height, ...style }}
        className={classNames(styles.systemsList, className)}
      >
        {nextList.map((v, i) => (
          <ListItem
            item={v}
            key={i}
            onSelect={onSelect}
            title={v[titleKey]}
            icon={v[iconKey]}
            iconBg={v[iconBgKey]}
          />
        ))}
      </div>
    </>
  );
};

interface ListItemProps extends Pick<SwitchSystemsProps, 'onSelect'> {
  item: any;
  title: string;
  icon: string;
  iconBg: string;
}
const ListItem: React.FC<ListItemProps> = ({
  item,
  onSelect,
  title,
  icon,
  iconBg,
}) => (
  <div
    className={styles.listItem}
    onClick={() => {
      onSelect && onSelect(item);
    }}
  >
    <div className={styles.logo} style={{ background: iconBg }}>
      <IconFont type={icon} />
    </div>
    <div className={styles.title} title={title}>
      {title}
    </div>
  </div>
);

export default SystemsList;
