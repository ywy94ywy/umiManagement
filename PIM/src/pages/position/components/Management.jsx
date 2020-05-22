/**
 * @module 组织组别管理
 */
import { useRequest } from 'umi';
import { SearchTree, useConstructTree } from 'lanlinker';
import { Skeleton } from 'antd';
import { fetchTree } from '@/services/tree';

export default ({ setCurrentNode }) => {
  const { data, loading } = useRequest(fetchTree('contractor'));

  const [treeData] = useConstructTree(data, {
    title: 'a',
    icon: 'c',
    key: 'id',
  });

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <SearchTree
      height={400}
      treeProps={{
        treeData,
        onClick(e, treeNode) {
          const { title } = treeNode;
          if (title.includes('工程')) {
            // 工程详情
            setCurrentNode(treeNode);
          } else {
            setCurrentNode(null);
          }
        },
      }}
    ></SearchTree>
  );
};
