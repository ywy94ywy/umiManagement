export const register = data => ({
  url: '/user/register',
  method: 'post',
  withToken: false,
  data,
});
