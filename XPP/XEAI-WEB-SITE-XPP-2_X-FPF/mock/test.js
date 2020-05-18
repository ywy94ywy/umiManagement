export default {
  'get /api/test1'(req, res) {
    res.json({
      resultSuccess: true,
      resultStatusId: 200,
      resultStatusContent: '操作成功',
      resultDataContent: 1,
    });
  },
  'get /api/test2'(req, res) {
    res.json({
      resultSuccess: true,
      resultStatusId: 200,
      resultStatusContent: '操作成功',
      resultDataContent: 2,
    });
  },
  'get /api/test3'(req, res) {
    res.json({
      resultSuccess: true,
      resultStatusId: 200,
      resultStatusContent: '操作成功',
      resultDataContent: 3,
    });
  },
};
