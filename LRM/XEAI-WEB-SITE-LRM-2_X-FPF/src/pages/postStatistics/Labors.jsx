/**
 * @module 劳务工人
 */
import React from 'react';
import { Table } from 'lanlinker';
import { Button, Form, DatePicker, Input } from 'antd';

export default () => {
  return (
    <Table
      columns={columns}
      actions={{
        right: (
          <Form layout="inline">
            <Form.Item label="入场日期">
              <DatePicker></DatePicker>
            </Form.Item>
            <Form.Item>
              <Input placeholder="请输入部门名称或负责人姓名"></Input>
            </Form.Item>
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </Form>
        ),
      }}
      scroll={{
        x: 4500,
      }}
    ></Table>
  );
};

const columns = [
  {
    title: '序号',
    render(t, v, i) {
      return i;
    },
  },
  {
    title: '劳务队伍名称',
    dataIndex: 'a',
  },
  {
    title: '劳务队长姓名',
    dataIndex: 'b',
  },
  {
    title: '小计值',
    dataIndex: 'c',
  },
  {
    title: '建筑电工',
    dataIndex: 'd',
  },
  {
    title: '钢筋工',
    dataIndex: 'd',
  },
  {
    title: '架子工',
    dataIndex: 'd',
  },
  {
    title: '混凝土工',
    dataIndex: 'd',
  },
  {
    title: '模板工',
    dataIndex: 'd',
  },
  {
    title: '机械设备安装工',
    dataIndex: 'd',
  },
  {
    title: '通风工',
    dataIndex: 'd',
  },
  {
    title: '安装起重工',
    dataIndex: 'd',
  },
  {
    title: '安装钳工',
    dataIndex: 'd',
  },
  {
    title: '电器设备安装调试工',
    dataIndex: 'd',
  },
  {
    title: '管道工',
    dataIndex: 'd',
  },
  {
    title: '变电安装工',
    dataIndex: 'd',
  },
  {
    title: '建筑电工',
    dataIndex: 'd',
  },
  {
    title: '司泵工',
    dataIndex: 'd',
  },
  {
    title: '挖掘铲运和桩工机械司机',
    dataIndex: 'd',
  },
  {
    title: '桩机操作工',
    dataIndex: 'd',
  },
  {
    title: '起重信号工',
    dataIndex: 'd',
  },
  {
    title: '建筑起重机械安装拆卸工',
    dataIndex: 'd',
  },
  {
    title: '装饰装修工',
    dataIndex: 'd',
  },
  {
    title: '室内成套设施安装工',
    dataIndex: 'd',
  },
  {
    title: '建筑门窗幕墙安装工',
    dataIndex: 'd',
  },
  {
    title: '幕墙制作工',
    dataIndex: 'd',
  },
  {
    title: '防水工',
    dataIndex: 'd',
  },
  {
    title: '木工',
    dataIndex: 'd',
  },
  {
    title: '石工',
    dataIndex: 'd',
  },
  {
    title: '电焊工',
    dataIndex: 'd',
  },
  {
    title: '爆破工',
    dataIndex: 'd',
  },
  {
    title: '除尘工',
    dataIndex: 'd',
  },
  {
    title: '测量放线工',
    dataIndex: 'd',
  },
  {
    title: '线路架设工',
    dataIndex: 'd',
  },
  {
    title: '古建筑传统石工',
    dataIndex: 'd',
  },
  {
    title: '古建筑传统瓦工',
    dataIndex: 'd',
  },
  {
    title: '古建筑传统画工',
    dataIndex: 'd',
  },
  {
    title: '古建筑传统木工',
    dataIndex: 'd',
  },
  {
    title: '古建筑传统油工',
    dataIndex: 'd',
  },
];
