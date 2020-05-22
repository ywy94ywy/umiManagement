export const fetchTable = id => {
  return {
    url: '/api/table',
    method: 'post',
    data: {
      id,
    },
  };
};
