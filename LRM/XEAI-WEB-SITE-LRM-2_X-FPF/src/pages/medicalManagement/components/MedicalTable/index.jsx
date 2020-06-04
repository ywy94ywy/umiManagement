import { useState } from 'react';
import { Table, Modal } from 'lanlinker';
import { Button } from 'antd';

export default ({ setList }) => {
  const [modal, setModal] = useState(false);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'a',
      width: 100,
      ellipsis: true,
    },
    {
      title: '身份证号',
      dataIndex: 'b',
      width: 130,
      ellipsis: true,
    },
    {
      title: '岗位',
      dataIndex: 'c',
      width: 100,
      ellipsis: true,
    },
    {
      title: '操作',
      dataIndex: 'd',
      width: 100,
      render() {
        return (
          <Button type="link" onClick={() => setModal(true)}>
            查看详情
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        onRow={record => ({
          onClick() {
            setList(record);
          },
        })}
        columns={columns}
        dataSource={[{ id: 't', a: '3' }]}
      ></Table>
      <Modal
        title="体检记录"
        width={900}
        visible={modal}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <DetailTable />
      </Modal>
    </>
  );
};

const DetailTable = () => {
  const [modal, setModal] = useState(false);

  const detailColumns = [
    {
      title: '流水编号',
      dataIndex: 'a',
      width: 100,
      ellipsis: true,
    },
    {
      title: '体检时间',
      dataIndex: 'a',
      width: 120,
      ellipsis: true,
    },
    {
      title: '身高',
      dataIndex: 'a',
      width: 100,
      ellipsis: true,
    },
    {
      title: '体重',
      dataIndex: 'a',
      width: 80,
      ellipsis: true,
    },
    {
      title: '血型',
      dataIndex: 'a',

      width: 70,
      ellipsis: true,
    },
    {
      title: '附件',
      width: 70,
      render() {
        return (
          <Button type="link" size="small" onClick={() => setModal(true)}>
            查看详情
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Table
        rowKey="id"
        columns={detailColumns}
        dataSource={[{ a: '1', id: '1' }]}
      ></Table>
      <Modal
        title="附件预览"
        width={700}
        visible={modal}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591270923942&di=0d3316d2ab6dc8e727d653cb22f6b728&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg"
          alt="预览图片"
          style={{
            width: 640,
            maxHeight: 480,
            margin: '0 auto',
            display: 'block',
          }}
        />
      </Modal>
    </>
  );
};
