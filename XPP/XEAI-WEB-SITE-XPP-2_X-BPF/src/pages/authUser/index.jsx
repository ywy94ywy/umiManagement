/**
 * @module 用户综合管理
 */
import React, { useState } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import DataManagement from '@/components/DataManagement';
import Allocated from './components/Allocated';
import styles from './style.less';

const type = ['已分配', '未分配'];
const typeList = type.map(v => ({
  tab: v,
  key: v,
}));

export default () => {
  const [currentPage, setCurrentPage] = useState(type[0]);

  return (
    <PageHeaderWrapper
      className={styles.userManagement}
      tabList={typeList}
      tabActiveKey={currentPage}
      onTabChange={e => {
        setCurrentPage(e);
      }}
    >
      <Switcher current={currentPage} />
      <Card title="数据管理" marginTop>
        <DataManagement
          onClicks={{
            importClassify() {
              console.log(1);
            },
            exportTags() {
              console.log(2);
            },
            importUsers() {
              console.log(3);
            },
            exportUsers() {
              console.log(4);
            },
            importLicense() {
              console.log(5);
            },
            licenseRecords() {
              console.log(6);
            },
          }}
        />
      </Card>
    </PageHeaderWrapper>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case type[0]:
      return <Allocated></Allocated>;
    case type[1]:
      return null;
    default:
      return null;
  }
};
