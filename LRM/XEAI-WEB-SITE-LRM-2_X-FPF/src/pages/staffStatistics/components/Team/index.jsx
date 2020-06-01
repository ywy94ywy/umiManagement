/**
 * @module 劳务队伍标签页
 */
import { useConstructTree } from 'lanlinker';
import { Button, Form, DatePicker, Input, Select, TreeSelect } from 'antd';
import TeamTable from '../Tables/TeamTable';

const { RangePicker } = DatePicker;

export default ({ modalType, setShowModal, setModalInfo }) => {
  const treeRawData = [
    {
      id: 1,
      a: '名字1',
      b: '键1',
      c: '图标',
      pId: 0,
    },
    {
      id: 2,
      a: '名字2',
      b: '键2',
      c: '图标',
      pId: 0,
    },
    {
      id: 3,
      a: '名字3',
      b: '键3',
      c: '图标',
      pId: 1,
    },
    {
      id: 7,
      a: '名字4',
      b: '键7',
      c: '图标',
      pId: 1,
    },
    {
      id: 8,
      a: '名字5',
      b: '键8',
      c: '图标',
      pId: 1,
    },
    {
      id: 5,
      a: '名字6',
      b: '键5',
      c: '图标',
      pId: 2,
    },
    {
      id: 4,
      a: '名字7',
      b: '键4',
      c: '图标',
      pId: 3,
    },
    {
      id: 6,
      a: '名字8',
      b: '键6',
      c: '图标',
      pId: 3,
    },
    {
      id: 9,
      a: '名字9',
      b: '键9',
      c: '图标',
      pId: 7,
    },
  ];

  const [treeData] = useConstructTree(treeRawData, {
    title: 'a',
    icon: 'c',
    key: 'id',
  });

  // 接口
  const dataSource = [
    {
      id: 'a',
      a: '劳务队伍数据',
    },
    {
      id: 'a2',
      a: '214',
    },
  ];

  return (
    <TeamTable
      dataSource={dataSource}
      modalType={modalType}
      setShowModal={setShowModal}
      setModalInfo={setModalInfo}
      actions={{
        right: (
          <Form layout="inline" initialValues={{ a: '1' }}>
            <Form.Item label="进场日期">
              <RangePicker style={{ width: 220 }} />
            </Form.Item>
            <Form.Item label="组织名称">
              <TreeSelect
                showSearch
                treeData={treeData}
                style={{ width: 150 }}
                treeDefaultExpandAll
                placeholder="请选择"
              />
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore={
                  <Form.Item noStyle name="a">
                    <Select>
                      <Select.Option value="1">劳务队伍名称</Select.Option>
                      <Select.Option value="2">劳务队长姓名</Select.Option>
                    </Select>
                  </Form.Item>
                }
                placeholder="请输入姓名或身份证号"
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
            <Form.Item>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        ),
      }}
    ></TeamTable>
  );
};
