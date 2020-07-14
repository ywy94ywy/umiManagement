// 用户登录密码管理-修改密码
export const updateLoginPassword = ({
  userId,
  sourceUserLoginPassword,
  targetUserLoginPassword,
}) => {
  return {
    url: '/foundation/xpassport/user/account/user-login-password/update-one',
    method: 'post',
    params: {
      userId,
      sourceUserLoginPassword,
      targetUserLoginPassword,
    },
  };
};

// 用户安全密码管理-修改密码
export const updateSafePassword = ({
  userId,
  userSafePasswordSource,
  userSafePasswordTarget,
}) => {
  return {
    url: '/foundation/xpassport/user/account/user-safe-password/update-one',
    method: 'post',
    params: {
      userId,
      userSafePasswordSource,
      userSafePasswordTarget,
    },
  };
};

// 用户密保问题管理-验证安全密码
export const validateSafePassword = ({ userId, userSafePassword }) => {
  return {
    url:
      '/foundation/xpassport/user/account/user-safe-password/retrieve-verify-one',
    method: 'get',
    params: {
      userId,
      userSafePassword,
    },
  };
};

// 用户密保手机管理-发送验证码
export const sendMobileMessage = userMobile => {
  return {
    url:
      '/foundation/xpassport/user/account/user-protect-mobile/send-replace-mobile-code',
    method: 'post',
    params: {
      userMobile,
    },
  };
};

// 用户密保手机管理-修改手机号码
export const updateMobile = ({
  userId,
  userMobile,
  userMobileCaptcha,
  userSafePassword,
}) => {
  return {
    url: '/foundation/xpassport/user/account/user-protect-mobile/update-one',
    method: 'post',
    params: {
      userId,
      userMobile,
      userMobileCaptcha,
      userSafePassword,
    },
  };
};

// 用户密保邮箱管理-发送验证码
export const sendEmailMessage = userEmail => {
  return {
    url:
      '/foundation/xpassport/user/account/user-protect-email/send-replace-email-code',
    method: 'post',
    params: {
      userEmail,
    },
  };
};

// 用户密保邮箱管理-修改邮箱
export const updateEmail = ({
  userId,
  userEmail,
  userEmailCaptcha,
  userSafePassword,
}) => {
  return {
    url: '/foundation/xpassport/user/account/user-protect-email/update-one',
    method: 'post',
    params: {
      userId,
      userEmail,
      userEmailCaptcha,
      userSafePassword,
    },
  };
};
