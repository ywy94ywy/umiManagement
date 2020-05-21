import { useMemo } from 'react';
import { destructTree } from '../utils/tree';

// todo 优化
export const useDestructTree = (treeData: any, options?: any) => {
  const flatTreeData = useMemo(() => destructTree(treeData, options), [
    treeData,
  ]);

  return [flatTreeData];
};
