// 获取用户已申请系统
export const fetchApplied = () => {
  return {
    url: '/tenantLicense/listApplyTenantLicense',
    method: 'get',
  };
};

// 验证用户账号
export const validateAccount = ({ type, userName }) => {
  return {
    url: '/user/verifyRepeat',
    method: 'get',
    withToken: false,
    params: {
      type,
      userName,
    },
  };
};

// 发送手机短信
export const sendMobile = ({ type, mobile }) => ({
  url: '/verifyCode/sendSmsVerify',
  method: 'post',
  withToken: false,
  data: {
    type,
    mobile,
  },
});

// 发送邮箱短信
export const sendEmail = ({ type, email }) => ({
  url: '/verifyCode/sendEmailVerify',
  method: 'post',
  withToken: false,
  data: {
    type,
    email,
  },
});

// 验证手机短信
export const validateMobile = ({ code, type, mobile }) => ({
  url: '/verifyCode/verifySmsCode',
  method: 'post',
  withToken: false,
  data: {
    code,
    mobile,
    type,
  },
});

// 验证邮箱短信
export const validateEmail = ({ code, type, email }) => ({
  url: '/verifyCode/verifyEmailCode',
  method: 'post',
  withToken: false,
  data: {
    code,
    type,
    email,
  },
});

// 获取用户信息
export const fetchUserInfo = () => ({
  url: '/user/findLoginUser',
  method: 'get',
});
