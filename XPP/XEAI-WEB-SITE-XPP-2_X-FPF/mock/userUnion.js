export default {
  '/api/userUnion'(req, res) {
    setTimeout(() => {
      res.json({
        resultSuccess: true,
        resultStatusId: 200,
        resultStatusContent: '操作成功',
        resultDataContent: {
          a: '235215335',
          b: '江小白',
          c: '',
        },
      });
    }, 1000);
  },
};
