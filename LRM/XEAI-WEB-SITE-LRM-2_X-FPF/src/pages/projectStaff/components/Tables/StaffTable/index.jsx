/**
 * @module 劳务人员表格
 */
import { useState } from 'react';
import { Table, ButtonModal } from 'lanlinker';
import DetailModal from './DetailModal';
import SalaryModal from './SalaryModal';
import AttendanceModal from './AttendanceModal';

export default ({ dataSource, ...props }) => {
  const [staffModalInfo, setStaffModalInfo] = useState({
    data: [],
    visible: false,
  });

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
            setStaffModalInfo({
              visible: true,
              data: record,
            });
          },
        })}
        {...props}
      ></Table>
      <DetailModal
        staffModalInfo={staffModalInfo}
        setStaffModalInfo={setStaffModalInfo}
      ></DetailModal>
    </>
  );
};

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
    render(record) {
      return (
        <ButtonModal
          title="工资详情"
          width={950}
          footer={null}
          buttonProps={{
            text: '查看详情',
            type: 'link',
            onClick(e) {
              e.stopPropagation();
            },
          }}
          onCancel={e => e.stopPropagation()}
          centered
        >
          <AttendanceModal record={record} />
        </ButtonModal>
      );
    },
  },
  {
    title: '考勤记录',
    render(record) {
      return (
        <ButtonModal
          title="考勤记录"
          width={950}
          footer={null}
          buttonProps={{
            text: '查看详情',
            type: 'link',
            onClick(e) {
              e.stopPropagation();
            },
          }}
          onCancel={e => e.stopPropagation()}
          centered
        >
          <SalaryModal record={record} />
        </ButtonModal>
      );
    },
  },
];
