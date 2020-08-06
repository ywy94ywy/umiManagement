/** 数字帐号 1-10 位的全数字 */
export const ID_VALIDATOR = {
  pattern: /^d{1,10}$/,
  message: '请输入1-10位的数字',
};
/** 昵称帐号 由简体中文或大小写英文字母或数字或下划线组成 ，首字母只能是简体中文或大小写英文字母 ,长度 1-18 位字符 */
export const NICK_VALIDATOR = {
  max: 18,
  message: '昵称长度不超过18位',
};
// 之前的验证方式
// export const NICK_VALIDATOR = {
//   pattern: /^[A-Za-z\u4e00-\u9fa5][\w\u4e00-\u9fa5]{0,17}$/,
//   message:
//     '由简体中文或大小写英文字母或数字或下划线组成 ，首字母只能是简体中文或大小写英文字母 ,长度 1-18 位字符',
// };
/** 手机帐号 1开头+10位数字 */
export const MOBILE_VALIDATOR = {
  pattern: /^1[0-9]{10}$/,
  message: '手机号码格式不正确',
};
/** 邮箱帐号 字符串中包含 @, 长度 36 位(由程序判断字符串长度)，中间有小数点 */
export const EMAIL_VALIDATOR = {
  pattern: /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}$/,
  max: 32,
  message: '邮箱格式不正确',
};
export const EMAIL_LENGTH_VALIDATOR = {
  max: 32,
  message: '邮箱最长为32位',
};

/** 身份证帐号 18位(前17位全数字,最后一位是数字或X)，并符合公安局正则表达式 */
export const IDENTITY_VALIDATOR = {
  pattern: /^[1-9]d{5}(18|19|20){1}d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])d{3}[d|X]$/,
  message: '身份证格式不正确',
};
/** 营业执照帐号 18位统一社会信用代码编号（由数字和大写字母组成）+下划线+13位部门序号（可以是英文字母和数字和下划线的组合）=最长32位字符(序号是为了生成不同地区的部门) */
export const LICENSE_VALIDATOR = {
  pattern: /^[A-Z0-9]{18}(_[A-Z0-9]+)*$/,
  message: '营业执照格式不正确',
};

// 登录密码
export const PASSWORD_VALIDATOR = {
  min: 6,
  max: 18,
  message: '密码长度为6至18位',
};

// 用户全名
export const USER_FULLNAME_VALIDATOR = {
  max: 32,
  message: '用户名称最长为32位',
};

// 用户单位
export const UNIT_VALIDATOR = {
  max: 32,
  message: '用户单位最长为32位',
};

// 用户职业
export const PROFESSION_VALIDATOR = {
  max: 64,
  message: '用户职业最长为32位',
};
