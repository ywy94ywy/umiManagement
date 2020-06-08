/**
 * @module 全部评价记录
 */
import { Table } from 'lanlinker';
import { Input, Button } from 'antd';
import { goodConductColumns } from '../../config';

export default props => {
  return (
    <Table
      {...props}
      columns={goodConductColumns}
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
  );
};
