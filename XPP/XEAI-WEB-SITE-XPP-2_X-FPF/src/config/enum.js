export const USER_TYPE = ['PERSONAL', 'UNIT'];

export const PASSWORD_QUESTIONS = [
  {
    key: 1,
    value: '您母亲的生日是?(YYYYMMDD)',
  },
  {
    key: 2,
    value: '您父亲的生日是?(YYYYMMDD)',
  },
  {
    key: 3,
    value: '您配偶的生日是?(YYYYMMDD)',
  },
  {
    key: 4,
    value: '您母亲的姓名是?',
  },
  {
    key: 5,
    value: '您父亲的姓名是?',
  },
  {
    key: 6,
    value: '您配偶的姓名是?',
  },
  {
    key: 7,
    value: '您的学号是?',
  },
  {
    key: 8,
    value: '您的工号是?',
  },
  {
    key: 9,
    value: '您小学班主任的名字是?',
  },
  {
    key: 10,
    value: '您初中班主任的名字是?',
  },
  {
    key: 11,
    value: '您高中班主任的名字是?',
  },
  {
    key: 12,
    value: '您大学班主任的名字是?',
  },
  {
    key: 13,
    value: '您最熟悉的童年好友的名字是?',
  },
  {
    key: 14,
    value: '您最熟悉的学校舍友姓名是?',
  },
  {
    key: 15,
    value: '对您一生影响最大的人姓名是?',
  },
];
export const PASSWORD_QUESTION_MAP = {};
PASSWORD_QUESTIONS.forEach(v => (PASSWORD_QUESTION_MAP[v.key] = v.value));
