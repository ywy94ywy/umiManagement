export const fetchUserInfo = page => {
  return {
    url: `/userInfo`,
    params: {
      page,
    },
  };
};
