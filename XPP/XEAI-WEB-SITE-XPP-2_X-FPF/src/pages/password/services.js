export const resetPassword = ({ newPassword, userName }) => ({
  url: '/user/resetPassword',
  method: 'post',
  withToken: false,
  data: {
    newPassword,
    userName,
  },
});
