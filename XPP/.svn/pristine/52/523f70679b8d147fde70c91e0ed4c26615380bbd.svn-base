import mockjs from 'mockjs';

export default {
  '/api/userInfo'(req, res) {
    const params = req.query;
    if (params.page) {
      switch (params.page) {
        case '1': {
          res.json({
            resultSuccess: true,
            resultStatusId: 200,
            resultStatusContent: '操作成功',
            resultDataContent: {
              a: '0',
              b: '江小白',
              c: '661',
              d: 'jiangxiaobai',
              E: '1565461',
              F: 'adksgjasg@qq.com',
              G: '1234124',
              H: 'xxx-asxx-xx',
            },
          });
          break;
        }
        case '2': {
          res.json({
            resultSuccess: true,
            resultStatusId: 200,
            resultStatusContent: '操作成功',
            resultDataContent: mockjs.mock({
              a: /^1[3895][1-9]\d{8}/,
              b: /\d[8]/,
              c: /\d[8]/,
              D: '@date("yyyy-MM-dd")',
              Dd: '@email',
              E: '@province' + '@city' + '@county',
              F: '@province' + '@city' + '@county',
              G: '1234124',
              H: '@ctitle(10)',
              Hsd: '@ctitle(30)',
              Hsdf: '@ctitle(30)',
              Hadfgdf: 'http://asfasf',
            }),
          });
          break;
        }
        case '3': {
          res.json({
            resultSuccess: true,
            resultStatusId: 200,
            resultStatusContent: '操作成功',
            resultDataContent: mockjs.mock({
              a: 1,
              b: '满族',
              c: '本科',
              d: '@province',
              e: '未婚',
              f: '团员',
              g: /1[56789]\d/,
              h: /[56789]\d/,
              iii: 'AB型',
              jjjj: '羽毛球',
              k: '@ctitle(10)',
              l: /^1[3895][1-9]\d{8}/,
              m: /^1[3895][1-9]\d{8}/,
              n: /^1[3895][1-9]\d{8}/,
              o: /^[1-9]\d{8}/,
              p: '@email',
              q: '@ctitle(3)',
            }),
          });
          break;
        }
        case '4': {
          res.json({
            status: 200,
            msg: '操作成功',
            data: mockjs.mock({
              a: 1,
              b: '满族',
              c: '本科',
            }),
          });
          break;
        }
        default: {
          res.json({
            status: 500,
            msg: '操作失败',
          });
          break;
        }
      }
    }
  },
};
