import { useState } from 'react';
const MODAL_TYPE = ['group', 'staff'];

export default () => {
  const [orgName, setOrgName] = useState(); // 组织名称
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    type: MODAL_TYPE[0],
    id: '',
    breadcrumb: ['', ''],
  }); // 点击劳务班组和劳务队伍出现的模态框信息

  return {
    orgName,
    setOrgName,
    modalInfo,
    setModalInfo,
  };
};
