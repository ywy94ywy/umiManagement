/**
 * @page 工程考勤统计
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Team from './components/Team';
import Group from './components/Group';
import Staff from './components/Staff';
import DetailsModal from './components/Modal/details';

const TAB = ['劳务队伍', '劳务班组', '劳务人员'];
const TAB_LIST = TAB.map(v => ({ key: v, tab: v }));
const MODAL_TYPE = ['group', 'staff'];

export default () => {
  const [currentTab, setCurrentTab] = useState(TAB[0]);
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    type: MODAL_TYPE[0],
    id: '',
    breadcrumb: ['', ''],
  }); // 点击劳务班组和劳务队伍出现的模态框信息

  return (
    <PageHeaderWrapper>
      <Card
        tabList={TAB_LIST}
        activeTabKey={currentTab}
        onTabChange={key => setCurrentTab(key)}
      >
        {currentTab === TAB[0] && <Team setModalInfo={setModalInfo}></Team>}
        {currentTab === TAB[1] && <Group setModalInfo={setModalInfo}></Group>}
        {currentTab === TAB[2] && <Staff></Staff>}
      </Card>
      <DetailsModal
        visible={modalInfo.visible}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
      />
    </PageHeaderWrapper>
  );
};
