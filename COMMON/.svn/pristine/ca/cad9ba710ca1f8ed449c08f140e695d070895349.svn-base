/**
 * @module 系统列表
 */
import React, { useState } from 'react';
import { Input } from 'antd';
import { SwitchSystemsProps } from '../SwitchSystems';
import classNames from 'classnames';
import IconFont from '../IconFont';
import styles from './style.less';

export interface IListItem {
  title: string;
}

export interface SystemsListProps extends Pick<SwitchSystemsProps, 'onSelect'> {
  list: IListItem[];
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

const SystemsList: React.FC<SystemsListProps> = ({
  list,
  onSelect,
  style,
  className,
  height = 400,
}) => {
  const [nextList, setNextList] = useState(list);
  const [flag, setFlag] = useState(false); // 输入法控制

  const handleChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      setNextList(list.filter(v => v.title.includes(value)));
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
          <ListItem item={v} key={i} onSelect={onSelect}></ListItem>
        ))}
      </div>
    </>
  );
};

interface ListItemProps extends Pick<SwitchSystemsProps, 'onSelect'> {
  item: IListItem;
}
const ListItem: React.FC<ListItemProps> = ({ item, onSelect }) => (
  <div
    className={styles.listItem}
    onClick={() => {
      onSelect && onSelect(item);
    }}
  >
    <div
      className={styles.logo}
      style={{ background: LogoMap[item.title].background }}
    >
      <IconFont type={LogoMap[item.title].iconfont}></IconFont>
    </div>
    <div className={styles.title} title={item.title}>
      {item.title}
    </div>
  </div>
);

const LogoMap: { [key: string]: { background: string; iconfont: string } } = {
  通行证管理系统: {
    background:
      'linear-gradient(180deg,rgba(255,226,159,1) 0%,rgba(247,121,125,1) 100%)',
    iconfont: 'icon-all',
  },
  项目综合管理系统: {
    background:
      'linear-gradient(180deg,rgba(113,187,255,1) 0%,rgba(24,144,255,1) 100%)',
    iconfont: 'icon-all',
  },
  劳务实名制管理系统: {
    background:
      'linear-gradient(180deg,rgba(236,128,141,1) 0%,rgba(217,81,72,1) 100%)',
    iconfont: 'icon-all',
  },
  视频监控管理系统: {
    background:
      'linear-gradient(180deg,rgba(4,222,236,1) 0%,rgba(65,152,231,1) 100%)',
    iconfont: 'icon-all',
  },
  物料管理系统: {
    background:
      'linear-gradient(180deg,rgba(255,224,153,1) 0%,rgba(254,182,20,1) 100%)',
    iconfont: 'icon-all',
  },
  质量安全监管系统: {
    background:
      'linear-gradient(180deg,rgba(181,181,255,1) 0%,rgba(127,127,213,1) 100%)',
    iconfont: 'icon-all',
  },
  设备管理系统: {
    background:
      'linear-gradient(180deg,rgba(179,178,211,1) 0%,rgba(137,137,186,1) 100%)',
    iconfont: 'icon-all',
  },
  项目进度管理系统: {
    background:
      'linear-gradient(180deg,rgba(153,198,255,1) 0%,rgba(79,168,232,1) 100%)',
    iconfont: 'icon-all',
  },
  环境管理系统: {
    background:
      'linear-gradient(180deg,rgba(113,217,158,1) 0%,rgba(60,186,115,1) 100%)',
    iconfont: 'icon-all',
  },
};

export default SystemsList;
