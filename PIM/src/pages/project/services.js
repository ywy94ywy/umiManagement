export const fetchTree = tabKey => {
  return {
    url: '/api/tree',
    method: 'post',
    data: {
      tree: tabKey,
    },
  };
};

export const fetchProject = id => {
  return {
    url: '/api/project',
    method: 'post',
    data: {
      id,
    },
  };
};
