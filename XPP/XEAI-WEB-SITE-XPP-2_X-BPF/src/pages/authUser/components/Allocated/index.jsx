/**
 * @module 已分配
 * @todo 搜索框布局
 */
import { useState } from 'react';
import { Tabs, Card, Row, Col } from 'antd';
import DataManagement from '@/components/DataManagement';
import TreeWrapper from './TreeWrapper';
import TableWrapper from './TableWrapper';

const TAB_LIST = ['用户职能分类', '承建工程标签', '监管工程标签', '用户权限标签'];

export default () => {
  const [currentNode, setCurrentNode] = useState({}); // 当前已分配数据

  return (
    <Row gutter={[24, 24]}>
      <Col flex="0 0 360px" style={{ overflow: 'hidden' }}>
        <Card title="用户组别管理" bodyStyle={{ padding: '0 12px 12px' }}>
          <Tabs tabBarGutter={12}>
            <Tabs.TabPane tab={TAB_LIST[0]} key={TAB_LIST[0]}>
              <TreeWrapper tab={TAB_LIST[0]} setCurrentNode={setCurrentNode}></TreeWrapper>
            </Tabs.TabPane>
            <Tabs.TabPane tab={TAB_LIST[1]} key={TAB_LIST[1]}>
              <TreeWrapper tab={TAB_LIST[1]} setCurrentNode={setCurrentNode}></TreeWrapper>
            </Tabs.TabPane>
            <Tabs.TabPane tab={TAB_LIST[2]} key={TAB_LIST[2]}>
              <TreeWrapper tab={TAB_LIST[2]} setCurrentNode={setCurrentNode}></TreeWrapper>
            </Tabs.TabPane>
            <Tabs.TabPane tab={TAB_LIST[3]} key={TAB_LIST[3]}>
              <TreeWrapper tab={TAB_LIST[3]} setCurrentNode={setCurrentNode}></TreeWrapper>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Col>
      <Col flex="1" style={{ overflow: 'hidden' }}>
        <Card title="用户详细列表" extra="租户主人编码：11">
          <TableWrapper currentNode={currentNode} />
        </Card>
      </Col>
      <Col span={24}>
        <Card title="数据管理">
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
      </Col>
    </Row>
  );
};
