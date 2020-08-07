// 再次确认字段
export const confirmField = field => {
  return ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue(field) === value) {
        return Promise.resolve();
      }
      return Promise.reject('两次输入的密码不一致！');
    },
  });
};
