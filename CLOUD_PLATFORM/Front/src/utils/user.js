import Cookies from 'js-cookie';
import { COULD_FPF_URL } from '@/config/host';

const tk = 'TOKEN';
const error_msg = 'errmsg';

// 获取token
export const getToken = () => {
  return Cookies.get(tk);
};

// 保存token
export const saveToken = token => {
  token && Cookies.set(tk, token);
};

// 移除token
export const removeToken = () => {
  Cookies.remove(tk);
};

// 回到登录页面
export const gotoLogin = redirect => {
  let url = COULD_FPF_URL;
  if (redirect) {
    url += '/login?redirect=' + encodeURIComponent(redirect);
  }
  window.location.href = url;
};

// 设置跨站错误信息
export const setErrorMessage = msg => {
  Cookies.set(error_msg, msg);
};

// 获取跨站错误信息
export const getErrorMessage = () => {
  return Cookies.get(error_msg);
};

// 移除跨站错误信息
export const removeErrorMessage = () => {
  Cookies.remove(error_msg);
};
