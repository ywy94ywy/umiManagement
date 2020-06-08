/**
 * @module 已提交评价记录
 */
import { Table } from 'lanlinker';
import { Input, Button } from 'antd';
import { misConductColumns } from '../../config';

export default props => {
  return (
    <Table
      {...props}
      dataSource={[
        {
          id: '1',
          a: '123',
        },
      ]}
      columns={misConductColumns}
      actions={{
        right: (
          <>
            <Input placeholder="请输入评价记录流水编号"></Input>
            <Button type="primary">查询</Button>
          </>
        ),
      }}
    />
  );
};
