export const fetchLogin = ({ password, userName }) => ({
  url: '/user/login',
  method: 'post',
  withToken: false,
  data: {
    password,
    userName,
  },
});
