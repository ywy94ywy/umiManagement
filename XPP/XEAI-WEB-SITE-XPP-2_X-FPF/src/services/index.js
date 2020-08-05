// 验证用户账号
export const validateAccount = ({ type, userName }) => {
  return {
    url: '/user/verifyRepeat',
    method: 'get',
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
  data: {
    type,
    mobile,
  },
});

// 发送邮箱短信
export const sendEmail = ({ type, email }) => ({
  url: '/verifyCode/sendEmailVerify',
  method: 'post',
  data: {
    type,
    email,
  },
});

// 验证手机短信
export const validateMobile = ({ code, type, mobile }) => ({
  url: '/verifyCode/verifySmsCode',
  method: 'post',
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
  data: {
    code,
    type,
    email,
  },
});
