/**
 * @module 搜索树
 */
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import Tree, { TreeProps } from './Tree';
import { useDestructTree } from '../../hooks';
const { Search } = Input;

export interface SearchTreeProps {
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  searchProps?: SearchProps;
  treeProps?: TreeProps;
}

const SearchTree: React.FC<SearchTreeProps> = ({
  height,
  className,
  style,
  searchProps = {},
  treeProps = {},
}) => {
  const { treeData = [] } = treeProps;
  const [expandedList, setExpandedList] = useState<string[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [flag, setFlag] = useState(false);
  const [flatTree] = useDestructTree(treeData);

  useEffect(() => {
    const allKeys = flatTree.map(v => v.key);
    // 默认展开所有
    setExpandedList(allKeys);
  }, []);

  const handleChange = (e: any) => {
    const list = flatTree
      .filter(item => {
        const title = item['title'] as string;
        try {
          if (title.includes(e.target.value)) {
            return true;
          }
          return false;
        } catch (err) {
          throw '搜索树请用string作为title' + err;
        }
      })
      .map((item: any) => item['key']);

    setAutoExpandParent(true);
    setExpandedList(list);
  };

  return (
    <section style={{ height: height, ...style }} className={className}>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="请输入..."
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
        {...searchProps}
      />
      <Tree
        height={height && height - 40}
        autoExpandParent={autoExpandParent}
        expandedKeys={expandedList}
        onExpand={(keys: any) => {
          setAutoExpandParent(false);
          setExpandedList(keys);
        }}
        {...treeProps}
      ></Tree>
    </section>
  );
};

export default SearchTree;
