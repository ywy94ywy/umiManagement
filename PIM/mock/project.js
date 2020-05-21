export default {
  'POST /api/tree'(req, res) {
    const { tree } = req.body;
    if (tree === 'contractor') {
      res.json({
        data: [
          {
            id: 1,
            a: '公司1',
            b: '键1',
            c: '图标',
            pId: 0,
            first: true,
          },
          {
            id: 2,
            a: '公司2',
            b: '键2',
            c: '图标',
            pId: 0,
            first: true,
          },
          {
            id: 3,
            a: '组织1',
            b: '键3',
            c: '图标',
            pId: 1,
            first: false,
          },
          {
            id: 7,
            a: '组织2',
            b: '键7',
            c: '图标',
            pId: 1,
            first: false,
          },
          {
            id: 8,
            a: '组织3',
            b: '键8',
            c: '图标',
            pId: 1,
            first: false,
          },
          {
            id: 5,
            a: '组织4',
            b: '键5',
            c: '图标',
            pId: 2,
            first: true,
          },
          {
            id: 4,
            a: '工程1',
            b: '键4',
            c: '图标',
            pId: 3,
            first: true,
          },
          {
            id: 6,
            a: '工程2',
            b: '键6',
            c: '图标',
            pId: 3,
            first: false,
          },
          {
            id: 9,
            a: '工程3',
            b: '键9',
            c: '图标',
            pId: 7,
            first: false,
          },
        ],
      });
    } else if (tree === 'supervisor') {
      res.json({
        data: [
          {
            id: 1,
            a: '另外一个公司1',
            b: '键1',
            c: '图标',
            pId: 0,
            first: true,
          },
          {
            id: 2,
            a: '公司2',
            b: '键2',
            c: '图标',
            pId: 0,
            first: true,
          },
          {
            id: 3,
            a: '组织1',
            b: '键3',
            c: '图标',
            pId: 1,
            first: false,
          },
          {
            id: 7,
            a: '组织2',
            b: '键7',
            c: '图标',
            pId: 1,
            first: false,
          },
          {
            id: 8,
            a: '组织3',
            b: '键8',
            c: '图标',
            pId: 1,
            first: false,
          },
          {
            id: 5,
            a: '组织4',
            b: '键5',
            c: '图标',
            pId: 2,
            first: true,
          },
          {
            id: 4,
            a: '工程1',
            b: '键4',
            c: '图标',
            pId: 3,
            first: false,
          },
          {
            id: 6,
            a: '工程2',
            b: '键6',
            c: '图标',
            pId: 3,
            first: true,
          },
          {
            id: 9,
            a: '工程3',
            b: '键9',
            c: '图标',
            pId: 7,
            first: false,
          },
        ],
      });
    }
  },
  'POST /api/project'(req, res) {
    const { id } = req.body;
    res.json({
      data: {
        a: id,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
      },
    });
  },
};
