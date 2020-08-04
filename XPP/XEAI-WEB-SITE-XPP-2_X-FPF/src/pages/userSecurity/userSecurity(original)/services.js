/** --- 用户密码管理模块 ---  */

// 用户登录密码管理-修改
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

// 用户安全密码管理-修改
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

// 用户安全密码管理-重置-发送短信
export const sendResetMobile = userMobile => {
  return {
    url:
      '/foundation/xpassport/user/account/user-protect-mobile/send-reset-mobile-code',
    method: 'post',
    params: {
      userMobile,
    },
  };
};

// 用户安全密码管理-重置-校验手机验证码
export const validateMobileCaptcha = ({
  userMobile,
  userMobileCaptchaTarget,
}) => {
  return {
    url:
      '/foundation/xpassport/user/account/user-protect-mobile/reset-safe-password-mobile-verify',
    method: 'post',
    params: {
      userMobile,
      userMobileCaptchaTarget,
    },
  };
};

// 用户安全密码管理-重置-发送邮件
export const sendResetEmail = userEmail => {
  return {
    url:
      '/foundation/xpassport/user/account/user-protect-email/send-reset-email-code',
    method: 'post',
    params: {
      userEmail,
    },
  };
};

// 用户安全密码管理-重置-校验邮箱验证码
export const validateEmailCaptcha = ({ userEmail, userEmailCaptchaTarget }) => {
  return {
    url:
      '/foundation/xpassport/user/account/user-protect-email/reset-safe-password-email-verify',
    method: 'post',
    params: {
      userEmail,
      userEmailCaptchaTarget,
    },
  };
};

// 用户安全密码管理-重置-校验密保问题
export const validateResetSecurity = ({
  userId,
  UserSelfExtendAccountProtectCatalogBO,
}) => {
  return {
    url:
      '/foundation/xpassport/user/account/user-self-extend-account-protect-catalog/retrieve-verify-one',
    method: 'post',
    params: {
      userId,
    },
    data: UserSelfExtendAccountProtectCatalogBO,
  };
};

// 用户安全密码管理-重置-新安全密码
export const updateSecurityPassword = userSafePassword => {
  return {
    url:
      '/foundation/xpassport/user/account/user-safe-password/reset-safe-password',
    method: 'post',
    params: {
      userSafePassword,
    },
  };
};

/** --- 用户密保管理模块 ---  */

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

// 用户密保问题管理-确认新密保问题
export const confirmQuestions = ({
  userId,
  UserSelfExtendAccountProtectCatalogBO,
}) => {
  return {
    url:
      '/foundation/xpassport/user/account/user-self-extend-account-protect-catalog/update-one',
    method: 'post',
    params: {
      userId,
    },
    data: UserSelfExtendAccountProtectCatalogBO,
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
