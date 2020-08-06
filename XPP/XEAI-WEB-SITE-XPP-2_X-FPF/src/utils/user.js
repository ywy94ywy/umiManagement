import Cookies from 'js-cookie';
import { XPP_FPF_URL } from '@/config/host';

const tk = 'TOKEN';
const user = 'U_INF';
const error_msg = 'errmsg';

// 获取token
export const getToken = () => {
  const token = Cookies.get(tk) || '';
  return token;
};

// 获取用户信息
export const getBreifUserInfo = () => {
  const userInfo = Cookies.get(user) || '';
  return JSON.parse(userInfo);
};

// 保存token和用户信息
export const saveTokenAndUser = (token, userInfo) => {
  if (token && userInfo) {
    Cookies.set(tk, token);
    Cookies.set(user, userInfo);
  }
};

// 移除token和用户信息
export const removeTokenAndUser = () => {
  Cookies.remove(tk);
  Cookies.remove(user);
};

// 回到登录页面
export const gotoLogin = () => {
  window.location.href = XPP_FPF_URL + '/login';
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
