export const fetchLogin = user => ({
  url:
    '/aggregate/common/login/agg-user-login/create-one-by-user-typeless-account-name-and-user-login-password',
  method: 'post',
  params: user,
});
