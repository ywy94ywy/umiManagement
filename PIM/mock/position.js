export default {
  'POST /api/table'(req, res) {
    const { id } = req.body;
    setTimeout(() => {
      res.json({
        data: new Array(12).fill('').map((v, i) => ({
          id: i,
          a: id,
          b: 1,
          c: 2,
          d: 3,
          e: 4,
          f: 5,
        })),
      });
    }, 1000);
  },
};
