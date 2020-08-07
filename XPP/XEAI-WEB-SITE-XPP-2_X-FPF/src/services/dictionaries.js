// [{
//   "code": "U1001",
//   "name": "单位类型",
// },
// {
//   "code": "U1002",
//   "name": "单位行业",
// }]

const fetchDictionary = categoryCode => {
  return {
    url: '/dictionaryCommon/findDictionaryList',
    method: 'get',
    scope: 'manager',
    withToken: false,
    params: {
      categoryCode,
    },
  };
};

// 获取企业单位类型字典
export const fetchUnitType = () => fetchDictionary('U1001');

// 获取单位行业类型字典
export const fetchIndustryType = () => fetchDictionary('U1002');
