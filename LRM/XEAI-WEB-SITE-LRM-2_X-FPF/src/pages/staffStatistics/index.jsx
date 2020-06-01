/**
 * @module 工程人员统计
 */
import { useState } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import Team from './components/Team';
import Group from './components/Group';
import Staff from './components/Staff';
import DetailsModal from './components/Modal/details';

const TAB = ['劳务队伍', '劳务班组', '劳务人员'];
const MODAL_TYPE = ['group', 'staff'];
const TAB_LIST = TAB.map(v => ({ key: v, tab: v }));

export default () => {
  const [currentTab, setCurrentTab] = useState(TAB[0]);
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    type: MODAL_TYPE[0],
    data: [],
    breadcrumb: ['', ''],
  });

  return (
    <PageHeaderWrapper>
      <Card
        tabList={TAB_LIST}
        activeTabKey={currentTab}
        onTabChange={key => setCurrentTab(key)}
      >
        {currentTab === TAB[0] && (
          <Team
            modalType={MODAL_TYPE}
            setShowModal={setShowModal}
            setModalInfo={setModalInfo}
          ></Team>
        )}
        {currentTab === TAB[1] && (
          <Group
            modalType={MODAL_TYPE}
            setShowModal={setShowModal}
            setModalInfo={setModalInfo}
          ></Group>
        )}
        {currentTab === TAB[2] && <Staff></Staff>}
      </Card>
      <DetailsModal
        visible={showModal}
        modalInfo={modalInfo}
        modalType={MODAL_TYPE}
        setShowModal={setShowModal}
        setModalInfo={setModalInfo}
      />
    </PageHeaderWrapper>
  );
};
