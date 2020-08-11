export const fetchUnapplied = () => {
  return {
    url: '/system/listAll',
    method: 'get',
  };
};

export const fetchProjects = systemId => {
  return {
    url: '/tenantLicense/listBindLicensedProject',
    method: 'get',
    params: {
      systemId,
    },
  };
};

export const applyLicense = projectId => {
  return {
    url: '/userLicense/apply',
    method: 'post',
    params: {
      projectId,
    },
  };
};
