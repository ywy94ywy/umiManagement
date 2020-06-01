/**
 * @module 劳务人员表格
 */
import { useState, useRef } from 'react';
import { Table, ButtonModal, Modal } from 'lanlinker';
import DetailModal from './DetailModal';

export default ({ dataSource, ...props }) => {
  const [show, setShow] = useState(false);
  const clickRef = useRef(null); // 修复antd-table-onrow的冒泡问题

  const staffColumns = [
    {
      title: '序号',
      render(t, r, i) {
        return i;
      },
    },
    {
      title: '姓名',
      dataIndex: 'a',
    },
    {
      title: '身份证号',
      dataIndex: 'b',
    },
    {
      title: '岗位',
      dataIndex: 'c',
    },
    {
      title: '进场时间',
      dataIndex: 'd',
    },
    {
      title: '退场时间',
      dataIndex: 'e',
    },
    {
      title: '劳动合同',
      dataIndex: 'f',
    },
    {
      title: '安全教育',
      dataIndex: 'g',
    },
    {
      title: '持证上岗',
      dataIndex: 'h',
    },
    {
      title: '住宿分配',
      dataIndex: 'i',
    },
    {
      title: '家庭地址',
      dataIndex: 'j',
    },
    {
      title: '联系电话',
      dataIndex: 'k',
    },
    {
      title: '开户银行',
      dataIndex: 'l',
    },
    {
      title: '银行分行',
      dataIndex: 'm',
    },
    {
      title: '银行账户',
      dataIndex: 'n',
    },
    {
      title: '工资详情',
      render() {
        return (
          <ButtonModal
            buttonProps={{
              text: '查看详情',
              type: 'link',
              onClick(e) {
                clickRef.current = 'detail';

                console.log(2);
              },
            }}
          ></ButtonModal>
        );
      },
    },
    {
      title: '考勤记录',
      render() {
        return (
          <ButtonModal
            buttonProps={{
              text: '查看详情',
              type: 'link',
              onClick(e) {
                clickRef.current = 'detail';

                console.log(2);
              },
            }}
          ></ButtonModal>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        dataSource={dataSource}
        columns={staffColumns}
        scroll={{
          x: 2000,
        }}
        onRow={record => ({
          onClick() {
            if (clickRef.current !== 'detail') {
              setShow(true);
            }
          },
        })}
        {...props}
      ></Table>
      <Modal
        title="员工档案"
        visible={show}
        onCancel={() => setShow(false)}
        footer={null}
        width={800}
      >
        <DetailModal></DetailModal>
      </Modal>
    </>
  );
};
