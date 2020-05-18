const baseUrl = 'http://localhost:8001';
const common = '/api';

export const request = {
  // timeout: 10000,
  // 请求拦截
  requestInterceptors: [
    (url, options) => {
      url = baseUrl + common + url;
      return {
        url,
        options,
      };
    },
  ],
  // 响应拦截
  responseInterceptors: [
    async (res, options) => {
      // http响应配置，如401权限
      return res;
    },
  ],
  // 中间件
  middlewares: [
    async function middlewareA(ctx, next) {
      await next();
      // 后台错误码封装
      const status = ctx.res.resultStatusId;
      if (status) {
        switch (status) {
          case 10086:
            console.log('----', ctx.res.resultDataContent);
            ctx.res.showType = 2;
            break;
          default:
            ctx.res.showType = 0;
            break;
        }
      }
    },
  ],
  // 后台接口错误适配器
  errorConfig: {
    adaptor: res => {
      return {
        success: res.resultSuccess,
        errorCode: res.resultStatusId,
        errorMessage: res.resultStatusContent,
        showType: res.showType,
      };
    },
  },
};
