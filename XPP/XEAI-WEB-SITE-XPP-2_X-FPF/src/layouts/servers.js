export const fetchMenus = () => {
  return {
    url: `/roleModule/findAuthorityModuleList`,
    method: 'get',
    params: {
      frontEndType: '1001',
      position: 0,
    },
  };
};
