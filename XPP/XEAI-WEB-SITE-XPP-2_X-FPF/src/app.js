import { message } from 'antd';
import { getToken, setErrorMessage } from '@/utils';
import { COULD_FPF_URL, COULD_DEV_URL, MANAGER_DEV_URL } from '@/config/host';

const baseUrl = COULD_DEV_URL;
const managerUrl = MANAGER_DEV_URL;

export const request = {
  // timeout: 1000,
  errorHandler(err) {
    const errMsg = err?.info?.errorMessage;
    if (errMsg) {
      // message.error(errMsg);
      return Promise.reject({
        status: err.info.resultStatusId,
        message: errMsg,
      });
    } else {
      return Promise.reject({
        status: err.data.status,
        message: err.data.message,
      });
    }
  },
  errorConfig: {
    adaptor: resData => {
      return {
        ...resData,
        success: resData.resultSuccess,
        showType: 0,
        errorMessage: resData.resultStatusContent,
      };
    },
  },
  // 请求拦截
  requestInterceptors: [
    (url, options) => {
      let fullUrl;
      if (options.withToken !== false) {
        const token = getToken();
        options.headers = {
          author_token: token,
        };
      }
      if (options.scope === 'manager') {
        fullUrl = managerUrl + url;
      } else {
        fullUrl = baseUrl + url;
      }

      return {
        url: fullUrl,
        ...options,
      };
    },
  ],
  // 响应拦截
  responseInterceptors: [
    async (res, options) => {
      if (!res) {
        message.error('响应超时！');
        return;
      }
      const { status } = res;
      if (status === 200) {
        return res;
      }
      // HTTP错误码
      // const httpCodeMaps = {
      //   404: '请求地址错误。',
      //   502: '网关错误。',
      //   503: '服务不可用，服务器暂时过载或维护。',
      //   504: '网关超时。',
      // };
      // message.error(httpCodeMaps[status]);
      return res;
    },
    async (res, options) => {
      try {
        const data = await res.clone().json();
        const { resultStatusId, resultStatusContent } = data;

        // token不存在或者过期
        if (resultStatusId === 401 || resultStatusId === 403) {
          setErrorMessage(resultStatusContent);
          window.location =
            COULD_FPF_URL +
            '/login?redirect=' +
            encodeURIComponent(window.location.href);
          return res;
        }

        // // 需要显示的后端错误码
        // const codeMaps = {
        //   '9999': '9999错误',
        //   '8888': resultStatusContent,
        // };
        // const err = codeMaps[resultStatusId];

        // if (err) {
        //   message.error(err);
        // }
      } catch (err) {
        console.log('error:', err);
      }

      return res;
    },
  ],
};
