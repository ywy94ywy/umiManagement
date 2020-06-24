export const sendMessage = userMobile => ({
  url:
    '/foundation/xpassport/user/account/user-protect-mobile/retrieve-send-one',
  method: 'post',
  params: {
    userMobile,
  },
});

export const sendEmail = userEmail => ({
  url:
    '/foundation/xpassport/user/account/user-protect-email/retrieve-send-one',
  method: 'post',
  params: {
    userEmail,
  },
});

export const mobileRegister = data => ({
  url:
    '/aggregate/common/login/agg-user-register/create-one-by-user-mobile-register-b-o',
  method: 'post',
  data,
});

export const emailRegister = data => ({
  url:
    '/aggregate/common/login/agg-user-register/create-one-by-user-email-register-b-o',
  method: 'post',
  data,
});
