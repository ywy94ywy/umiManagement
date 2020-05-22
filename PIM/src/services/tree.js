export const fetchTree = tabKey => {
  return {
    url: '/api/tree',
    method: 'post',
    data: {
      tree: tabKey,
    },
  };
};
