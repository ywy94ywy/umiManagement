import { Card } from 'antd';
import TableWrapper from '../Allocated/TableWrapper';

export default () => {
  return (
    <Card title="用户详细列表" extra="租户主人编码：11">
      <TableWrapper></TableWrapper>
    </Card>
  );
};
