import { TreeList } from '@/components/Tree';
import { AntTreeNodeProps } from 'antd/es/Tree';

export interface rename {
  key?: string;
  pId?: string;
  title?: string;
  icon?: string;
  children?: string;
  reName?: rename;
}

export interface rename2 {
  children?: string;
}

type IContructTree = (treeList: TreeList, reName?: rename) => Array<any>;

// 根据平铺结构生成嵌套树结构
export const constructTree: IContructTree = (treeList = [], config = {}) => {
  const {
    key = 'id',
    pId = 'pId',
    title = 'title',
    icon = 'icon',
    children = 'children',
  } = config;

  const nextTreeList: TreeList = [];
  const idMap: { [key: string]: {} } = {};

  treeList.forEach(node => {
    node[key] && (idMap[node[key]] = node);
  });
  treeList.forEach(node => {
    if (node) {
      !node.key && (node.key = node[key].toString());
      !node.pId && (node.pId = node[pId]);
      !node.title && (node.title = node[title]);
      !node.icon && (node.icon = node[icon]);

      const parent: AntTreeNodeProps = idMap[node[pId]];
      if (parent) {
        parent[children]
          ? parent[children].push(node)
          : (parent[children] = [node]);
      } else {
        nextTreeList.push(node);
      }
    }
  });

  return nextTreeList;
};

// todo 优化
export const destructTree = (treeData = [], options = {}) => {
  const arr: any[] = [];
  const destruct = (treeData: any, options: any) => {
    const { children = 'children' } = options;
    treeData.forEach((node: any) => {
      const { [children]: child, ...props } = node;
      arr.push(props);
      if (child) {
        destruct(child, options);
      }
    });
  };
  destruct(treeData, options);
  return arr;
};
