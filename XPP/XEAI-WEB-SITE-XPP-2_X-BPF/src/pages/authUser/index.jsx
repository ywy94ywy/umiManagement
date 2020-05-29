/**
 * @module 用户综合管理
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import Allocated from './components/Allocated';
import Unallocated from './components/Unallocated';

const TYPE_LIST = ['已分配', '未分配'];
const typeList = TYPE_LIST.map(v => ({
  tab: v,
  key: v,
}));

export default () => {
  const [currentPage, setCurrentPage] = useState(TYPE_LIST[0]);

  return (
    <PageHeaderWrapper
      tabList={typeList}
      tabActiveKey={currentPage}
      onTabChange={key => setCurrentPage(key)}
    >
      {currentPage === TYPE_LIST[0] && <Allocated />}
      {currentPage === TYPE_LIST[1] && <Unallocated />}
    </PageHeaderWrapper>
  );
};
