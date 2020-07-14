// 获取用户基本信息
export const fetchUserInfo = userId => {
  return {
    url: `/foundation/user/catalog/user-self-base-catalog/retrieve-one-by-user-id`,
    method: 'post',
    params: { userId },
  };
};

// 获取用户综合信息
export const fetchGeneralInfo = userId => {
  return {
    url: `/foundation/user-self-extend-synthesis-catalog/retrieve-one-by-user-id`,
    method: 'post',
    params: { userId },
  };
};

// 获取个人扩展信息
export const fetchExpanedInfo = personalUserId => {
  return {
    url: `/foundation/user/catalog/user-self-extend-personal-catalog/retrieve-one-by-personal-user-id`,
    method: 'post',
    params: { personalUserId },
  };
};
