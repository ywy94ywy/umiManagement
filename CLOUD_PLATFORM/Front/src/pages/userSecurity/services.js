/** --- 用户密码管理模块 ---  */
// 用户登录密码管理-修改
export const updateLoginPassword = ({ oldPassword, newPassword }) => {
  return {
    url: '/user/modifyLoginUserPassword',
    method: 'post',
    data: {
      oldPassword,
      newPassword,
    },
  };
};

/** --- 用户密保管理模块 ---  */
// 用户密保手机管理-修改手机号码
export const updateMobile = ({ code, mobile, type }) => {
  return {
    url: '/user/modifyLoginUserMobile',
    method: 'post',
    data: {
      code,
      mobile,
      type,
    },
  };
};

// 用户密保邮箱管理-修改邮箱
export const updateEmail = ({ code, email, type }) => {
  return {
    url: '/user/modifyLoginUserEmail',
    method: 'post',
    data: {
      code,
      email,
      type,
    },
  };
};
