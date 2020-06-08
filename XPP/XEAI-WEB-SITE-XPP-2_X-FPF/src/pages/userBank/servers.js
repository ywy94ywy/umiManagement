// 获取银行卡片
export const fetchBankCards = userId => {
  return {
    url:
      '/foundation/user/catalog/user-self-extend-bank-account-catalog/retrieve-list-by-user-id',
    method: 'post',
    params: {
      userId,
    },
  };
};

// 新增银行卡片
export const createBankCard = ({
  userBankAccountNumber,
  userBankName,
  userBankCode,
  userBankBranchName,
  userBankBranchCode,
  userBankAccountNumberIsDefault,
  userId,
} = {}) => {
  return {
    url:
      '/foundation/user/catalog/user-self-extend-bank-account-catalog/create-one',
    method: 'post',
    data: {
      userBankAccountNumber,
      userBankName,
      userBankCode,
      userBankBranchName,
      userBankBranchCode,
      userBankAccountNumberIsDefault,
      userId,
    },
  };
};

// 更新银行卡片
export const UploadBankCard = ({
  userBankAccountNumber,
  userBankName,
  userBankCode,
  userBankBranchName,
  userBankBranchCode,
  userBankAccountNumberIsDefault,
  userId,
} = {}) => {
  return {
    url:
      '/foundation/user/catalog/user-self-extend-bank-account-catalog/create-one',
    method: 'post',
    data: {
      userBankAccountNumber,
      userBankName,
      userBankCode,
      userBankBranchName,
      userBankBranchCode,
      userBankAccountNumberIsDefault,
      userId,
    },
  };
};
