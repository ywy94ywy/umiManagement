// 修改个人注册信息
export const updatePersonRegister = ({ fullName, id, nickname, avatar }) => {
  return {
    url: `/user/updateLoginUser`,
    method: 'post',
    data: { fullName, id, nickname, avatar },
  };
};

// 修改企业注册信息
export const updateCompanyRegister = ({
  fullName,
  briefName,
  id,
  nickname,
  avatar,
}) => {
  return {
    url: `/user/updateLoginUser`,
    method: 'post',
    data: { fullName, briefName, id, nickname, avatar },
  };
};

// 获取个人扩展信息
export const fetchPersonExpanded = () => {
  return {
    url: `/userPersonal/findLoginUserPersonal`,
    method: 'get',
  };
};

// 修改个人扩展信息
export const updatePersonExpanded = ({
  profession,
  workUnitName,
  workEmail,
  sex,
  workMobile,
}) => {
  return {
    url: `/userPersonal/saveLoginUserPersonal`,
    method: 'post',
    data: { profession, workUnitName, workEmail, sex, workMobile },
  };
};

// 获取企业扩展信息
export const fetchCompanyExpanded = () => {
  return {
    url: `/userUnit/findLoginUserUnit`,
    method: 'get',
  };
};

// 修改企业扩展信息
export const updateCompanyExpanded = data => {
  return {
    url: `/userUnit/saveLoginUserUnit`,
    method: 'post',
    data,
  };
};
