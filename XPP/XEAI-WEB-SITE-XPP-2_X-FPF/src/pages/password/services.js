export const resetPassword = ({ newPassword, userName }) => ({
  url: '/user/resetPassword',
  method: 'post',
  data: {
    newPassword,
    userName,
  },
});
