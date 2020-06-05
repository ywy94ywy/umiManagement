/**
 * @module 工程信息详情
 */
import { Tabs } from 'antd';
import ProjectInfo from './ProjectInfo';
import EngineeringInfo from './EngineeringInfo';
import ResponsibilityInfo from './ResponsibilityInfo';
import ParticipantInfo from './ParticipantInfo';

const { TabPane } = Tabs;

export default () => {
  return (
    <Tabs>
      <TabPane key="项目基本信息" tab="项目基本信息">
        <ProjectInfo />
      </TabPane>
      <TabPane key="工程基本信息" tab="工程基本信息">
        <EngineeringInfo />
      </TabPane>
      <TabPane key="五方责任主体基本信息" tab="五方责任主体基本信息">
        <ResponsibilityInfo />
      </TabPane>
      <TabPane key="参建各方基本信息" tab="参建各方基本信息">
        <ParticipantInfo />
      </TabPane>
    </Tabs>
  );
};
