// 验证用户账号
export const validateAccount = userTypelessAccountName => {
  return {
    url:
      '/aggregate/user/catalog/agg-user-self-all-catalog/retrieve-user-id-by-user-typeless-account-name',
    method: 'get',
    params: {
      userTypelessAccountName,
    },
  };
};
