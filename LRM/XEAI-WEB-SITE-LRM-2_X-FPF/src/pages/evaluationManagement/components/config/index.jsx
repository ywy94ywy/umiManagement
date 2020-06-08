import { ButtonModal } from 'lanlinker';
export * from './forms';
// tab记录类型
export const recordsType = [
  '已提交评价记录',
  '本级组织评价记录',
  '全部评价记录',
  '待审批评价记录',
];

// 不良行为记录表格字段
export const misConductColumns = [
  {
    title: '流水编号',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '事件时间',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '事件类型',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '操作人组织全名',
    dataIndex: 'e',
    ellipsis: true,
  },
  {
    title: '评价审核状态',
    dataIndex: 'f',
    ellipsis: true,
  },
];

// 良好记录表格字段
export const goodConductColumns = [
  {
    title: '工号',
    dataIndex: 'aa',
    ellipsis: true,
  },
  {
    title: '姓名',
    dataIndex: 'a',
    ellipsis: true,
  },
  {
    title: '身份证号',
    dataIndex: 'b',
    ellipsis: true,
  },
  {
    title: '事件时间',
    dataIndex: 'd',
    ellipsis: true,
  },
  {
    title: '事件类型',
    dataIndex: 'e',
    ellipsis: true,
  },
  {
    title: '事件内容',
    dataIndex: 'f',
    ellipsis: true,
  },
  {
    title: '操作人组织全名',
    dataIndex: 'g',
    ellipsis: true,
  },
  {
    title: '操作人联系电话',
    dataIndex: 'h',
    ellipsis: true,
  },
  {
    title: '备注',
    dataIndex: 'i',
    ellipsis: true,
  },
  {
    title: '附件',
    render() {
      return (
        <ButtonModal buttonProps={{ text: '附件', type: 'link' }}>
          附件
        </ButtonModal>
      );
    },
  },
];
