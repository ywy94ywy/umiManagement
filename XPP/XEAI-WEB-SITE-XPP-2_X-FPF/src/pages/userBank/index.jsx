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
  const { data, loading, run } = useRequest(fetchBankCards(1), {
    manual: true,
  });

  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        <div
          onClick={() => {
            run();
          }}
        >
          123
        </div>
        {/* <BankCardList data={data} loading={loading} runFetch={run} /> */}
      </Card>
    </PageHeaderWrapper>
  );
};
