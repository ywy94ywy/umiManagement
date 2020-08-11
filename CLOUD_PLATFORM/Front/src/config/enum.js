// 用户类型-列表
export const USER_TYPE_LIST = [
  {
    name: 'PERSON',
    key: '1',
    value: '个人',
  },
  {
    name: 'COMPANY',
    key: '2',
    value: '企业',
  },
];

// 用户类型-映射
export const USER_TYPE = USER_TYPE_LIST.reduce(
  (t, v) => ({ ...t, [v.name]: { KEY: v.key, VALUE: v.value } }),
  {},
);

// 账号类型
export const ACCOUNT_TYPE = {
  MOBILE: '0',
  EMAIL: '1',
  NICKNAME: '2',
};

// 验证类型
export const VERIFY_CODE = {
  REGISTER: '0',
  RESET: '1',
  UPDATE: '2',
};
