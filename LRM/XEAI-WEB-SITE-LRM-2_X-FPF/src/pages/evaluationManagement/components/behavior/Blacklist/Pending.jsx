/**
 * @module 待审批评价记录
 */
import { useState } from 'react';
import { Table, Modal } from 'lanlinker';
import { Input, Button } from 'antd';
import { misConductColumns } from '../../config';

export default props => {
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    info: {},
  });

  const columns = [
    ...misConductColumns,
    {
      title: '操作',
      render() {
        return (
          <Button
            type="link"
            size="small"
            onClick={() => {
              setModalInfo({
                ...modalInfo,
                visible: true,
              });
            }}
          >
            审批
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Table
        {...props}
        columns={columns}
        dataSource={[
          {
            id: '1',
            a: '123',
          },
        ]}
        actions={{
          right: (
            <>
              <Input placeholder="请输入评价记录流水编号"></Input>
              <Button type="primary">查询</Button>
            </>
          ),
        }}
      />
      <Modal
        title="审批"
        visible={modalInfo.visible}
        onCancel={() => setModalInfo({ ...modalInfo, visible: false })}
      >
        pending
      </Modal>
    </>
  );
};
