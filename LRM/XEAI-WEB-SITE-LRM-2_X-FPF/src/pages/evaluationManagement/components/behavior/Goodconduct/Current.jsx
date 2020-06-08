/**
 * @module 本级组织评价记录
 */
import { Table, ButtonModal } from 'lanlinker';
import { Input, Button } from 'antd';
import { goodConductColumns } from '../../config';
import CreateModal from '../../modals/CreateModal';
import UploadModal from '../../modals/UploadModal';

export default props => {
  return (
    <Table
      {...props}
      columns={goodConductColumns}
      rowSelection={{
        onSelect() {},
      }}
      dataSource={[
        {
          id: '1',
          a: '123',
        },
      ]}
      actions={{
        left: (
          <>
            <ButtonModal
              width={1000}
              buttonProps={{ text: '新增', type: 'primary' }}
              title="新增涉事组织"
            >
              <CreateModal type="good" />
            </ButtonModal>
            <ButtonModal
              width={1000}
              buttonProps={{ text: '修改', type: 'primary' }}
              title="修改涉事组织"
            >
              <UploadModal />
            </ButtonModal>
            <Button type="primary" danger>
              删除
            </Button>
          </>
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
