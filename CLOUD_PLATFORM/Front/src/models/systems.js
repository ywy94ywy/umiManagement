import { useState } from 'react';
import { useRequest } from 'umi';
import { fetchApplied } from '@/services';

export default () => {
  const [appliedSystems, setAppliedSystems] = useState([]);

  const fetchAppliedRequest = useRequest(fetchApplied, {
    manual: true,
    onSuccess(res) {
      setAppliedSystems(res);
    },
  });

  return { appliedSystems, fetchAppliedRequest };
};
