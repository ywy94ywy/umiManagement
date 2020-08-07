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

export const USER_TYPE = USER_TYPE_LIST.reduce(
  (t, v) => ({ ...t, [v.name]: { KEY: v.key, VALUE: v.value } }),
  {},
);

export const ACCOUNT_TYPE = {
  MOBILE: '0',
  EMAIL: '1',
  NICKNAME: '2',
};

export const VERIFY_CODE = {
  REGISTER: '0',
  RESET: '1',
  UPDATE: '2',
};
