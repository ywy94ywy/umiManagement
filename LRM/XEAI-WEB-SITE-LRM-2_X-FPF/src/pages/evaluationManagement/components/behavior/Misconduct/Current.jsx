/**
 * @module 本级组织评价记录
 */
import { Table, ButtonModal } from 'lanlinker';
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
        left: (
          <ButtonModal
            buttonProps={{ text: '新增', type: 'primary' }}
            title="新增涉事人员"
          >
            pending
          </ButtonModal>
        ),
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
