import { useState } from 'react';
import { useRequest } from 'umi';
import { fetchUserInfo } from '@/services';

export default () => {
  const [userInfo, setUserInfo] = useState('');

  const fetchUserRequest = useRequest(fetchUserInfo, {
    manual: true,
    onSuccess(res) {
      setUserInfo(res);
    },
  });

  return { userInfo, fetchUserRequest };
};
