/**
 * @module 班组人员模态框
 */
import { Modal } from 'lanlinker';
import { Breadcrumb } from 'antd';
import GroupTable from '../Tables/GroupTable';
import StaffTable from '../Tables/StaffTable';

export default ({ children, modalInfo, setModalInfo, ...props }) => {
  const { id, type, breadcrumb } = modalInfo;

  return (
    <Modal
      title="工程人员统计"
      width={1200}
      footer={null}
      onCancel={() => setModalInfo({ ...modalInfo, visible: false })}
      {...props}
    >
      {type === 'group' && (
        <GroupModal
          id={id}
          setModalInfo={setModalInfo}
          breadcrumb={breadcrumb}
        />
      )}
      {type === 'staff' && (
        <StaffModal
          id={id}
          breadcrumb={breadcrumb}
          setModalInfo={setModalInfo}
        />
      )}
    </Modal>
  );
};

const GroupModal = ({ id, breadcrumb, setModalInfo }) => {
  // 接口
  const dataSource = [{ id: '12', a: '组模态框' }];
  return (
    <>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>
          <a href="#">{breadcrumb[0]}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <GroupTable dataSource={dataSource} setModalInfo={setModalInfo} />
    </>
  );
};

const StaffModal = ({ id, breadcrumb, setModalInfo }) => {
  // 接口
  const dataSource = [{ id: '12', a: '人员模态框' }];

  return (
    <>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item
          onClick={() =>
            setModalInfo({
              visible: true,
              type: 'group',
              id: '队伍id',
              breadcrumb: [breadcrumb[0]],
            })
          }
        >
          <a href="#">{breadcrumb[0]}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">{breadcrumb[1]}</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <StaffTable dataSource={dataSource} setModalInfo={setModalInfo} />
    </>
  );
};
