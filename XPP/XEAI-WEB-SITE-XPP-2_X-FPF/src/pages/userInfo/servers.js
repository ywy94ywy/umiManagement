// 获取个人扩展信息
export const fetchPersonExpanded = () => {
  return {
    url: `/userPersonal/findLoginUserPersonal`,
    method: 'get',
  };
};

// 修改个人注册信息
export const updatePersonRegister = ({ fullName, id, nickname, avatar }) => {
  return {
    url: `/user/updateLoginUser`,
    method: 'post',
    data: { fullName, id, nickname, avatar },
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
