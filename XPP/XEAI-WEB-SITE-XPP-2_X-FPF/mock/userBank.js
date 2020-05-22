export default {
  '/api/bankCards'(req, res) {
    setTimeout(() => {
      res.json({
        resultSuccess: true,
        resultStatusId: 200,
        resultStatusContent: '操作成功',
        resultDataContent: [
          {
            title: '中国农业银行',
            type: '储蓄卡',
            number: 6546513214654654654,
            first: true,
          },
          {
            title: '中国工商银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
          {
            title: '中国建设银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
          {
            title: '招商银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
          {
            title: '中国银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
          {
            title: '中国邮政储蓄银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
          {
            title: '交通银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
          {
            title: '其他银行',
            type: '储蓄卡',
            number: 6546513214654654654,
          },
        ],
      });
    }, 1000);
  },
};
