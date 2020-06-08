/**
 * @module 用户银行信息管理
 * @todo 卡号脱敏以及数字化
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import { useRequest } from 'umi';
import { fetchBankCards } from './servers';
import BankCardList from './components/BankCardList';

export default () => {
  const { data, loading, run: runFetch } = useRequest(fetchBankCards(1));

  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        <BankCardList data={data} loading={loading} runFetch={runFetch} />
      </Card>
    </PageHeaderWrapper>
  );
};
