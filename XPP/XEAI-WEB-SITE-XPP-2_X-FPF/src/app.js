import { message } from 'antd';
import Cookies from 'js-cookie';

const devUrl = 'http://192.168.1.115:10020/xeai-consumer-xbiz-xpp-fpf/oapi';
const mockUrl = '/api';
const baseUrl = devUrl;

export const request = {
  // timeout: 1000,
  errorConfig: {
    adaptor: resData => {
      return {
        ...resData,
        success: resData.resultStatusId === 200,
        showType: 0,
        errorMessage: resData.resultStatusContent,
      };
    },
  },
  // 请求拦截
  requestInterceptors: [
    (url, options) => {
      const token = Cookies.get('TOKEN');
      if (
        url ===
        '/aggregate/common/login/agg-user-login/create-one-by-user-typeless-account-name-and-user-login-password'
      ) {
      } else if (token) {
        options.headers = {
          author_token: token,
        };
      }

      return {
        url: baseUrl + url,
        ...options,
      };
    },
  ],
  // 响应拦截
  responseInterceptors: [
    async (res, options) => {
      const { status } = res;
      if (status === 200) {
        return res;
      }
      // HTTP错误码
      const httpCodeMaps = {
        404: '请求地址错误。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
      };
      message.error(httpCodeMaps[status]);
      return res;
    },
    async (res, options) => {
      try {
        const data = await res.clone().json();
        const { resultStatusId, resultStatusContent } = data;

        // token不存在或者过期
        if (resultStatusId === 401 || resultStatusId === 403) {
          Cookies.set('timeout', true);
          window.location =
            'http://localhost:8001/login?redirect=' +
            encodeURIComponent(window.location.href);
          return res;
        }

        // 需要显示的后端错误码
        const codeMaps = {
          '9999': '9999错误',
          '8888': resultStatusContent,
        };
        const err = codeMaps[resultStatusId];

        if (err) {
          message.error(err);
        }
      } catch (err) {
        console.log('error:', err);
      }

      return res;
    },
  ],
};
