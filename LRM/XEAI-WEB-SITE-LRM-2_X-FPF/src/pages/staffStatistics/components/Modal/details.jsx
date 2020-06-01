/**
 * @module 班组人员模态框
 */
import { Modal } from 'lanlinker';
import { Breadcrumb } from 'antd';
import GroupTable from '../Tables/GroupTable';
import StaffTable from '../Tables/StaffTable';

export default ({
  children,
  modalType,
  modalInfo,
  setModalInfo,
  setShowModal,
  ...props
}) => {
  const { data, type, breadcrumb } = modalInfo;

  return (
    <Modal
      title="工程人员统计"
      footer={null}
      width={1200}
      onCancel={() => setShowModal(false)}
      {...props}
    >
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item
          onClick={() =>
            setModalInfo({
              type: modalType[0],
              data: [
                {
                  id: 'a',
                  a: '劳务班组返回',
                },
                {
                  id: 'a2',
                  a: '214',
                },
              ],
              breadcrumb: [breadcrumb[0]],
            })
          }
        >
          <a href="#">{breadcrumb[0]}</a>
        </Breadcrumb.Item>
        {type === modalType[1] && (
          <Breadcrumb.Item>
            <a href="#">{breadcrumb[1]}</a>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
      {type === modalType[0] && (
        <GroupTable
          dataSource={data}
          modalType={modalType}
          setShowModal={setShowModal}
          setModalInfo={setModalInfo}
        />
      )}
      {type === modalType[1] && <StaffTable dataSource={data} />}
    </Modal>
  );
};
