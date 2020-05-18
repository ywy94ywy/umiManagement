import { useMemo } from 'react';
import { rename, constructTree } from '../utils/tree';

export const useConstructTree = (treeRawData: any, rename: rename) => {
  const treeData = useMemo(() => constructTree(treeRawData, rename), [
    treeRawData,
  ]);

  return [treeData];
};
