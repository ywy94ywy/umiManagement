/**
 * @module 劳务队伍表格
 */
import { Table } from 'lanlinker';

export default ({
  dataSource,
  modalType,
  setShowModal,
  setModalInfo,
  ...props
}) => {
  return (
    <Table
      rowKey="id"
      dataSource={dataSource}
      columns={columns}
      onRow={record => ({
        onClick() {
          setShowModal(true);
          setModalInfo({
            type: modalType[0],
            data: [
              {
                id: 'a',
                a: '模态框班组',
              },
            ],
            breadcrumb: ['XXX队伍'],
          });
        },
      })}
      {...props}
    ></Table>
  );
};

const columns = [
  {
    title: '序号',
    render(t, r, i) {
      return i + 1;
    },
  },
  {
    title: '劳务队伍名称',
    dataIndex: 'a',
  },
  {
    title: '在职人员',
    dataIndex: 'b',
  },
  {
    title: '进场人员',
    dataIndex: 'c',
  },
  {
    title: '退场人员',
    dataIndex: 'd',
  },
  {
    title: '银行账号',
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
];
