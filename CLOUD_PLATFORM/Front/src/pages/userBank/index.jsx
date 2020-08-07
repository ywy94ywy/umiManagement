/**
 * @module 用户银行信息管理
 * @todo 卡号脱敏以及数字化
 */
import { PageHeaderWrapper } from 'lanlinker';
import { Card } from 'antd';
import { useRequest } from 'umi';
import { fetchBankCards } from './servers';
import Cookies from 'js-cookie';
import BankCardList from './components/BankCardList';

export default () => {
  const userInfo = Cookies.get('u_inf');
  const userId = JSON.parse(userInfo).userId;

  const { data, loading, run } = useRequest(fetchBankCards(userId), {
    // manual: true,
  });

  return (
    <PageHeaderWrapper>
      <Card style={{ minHeight: 600 }}>
        <BankCardList data={data} loading={loading} runFetch={run} />
      </Card>
    </PageHeaderWrapper>
  );
};
