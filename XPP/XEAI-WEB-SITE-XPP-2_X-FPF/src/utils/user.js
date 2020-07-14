import Cookies from 'js-cookie';
import { XPP_FPF_URL } from '@/config/host';

export const getUserId = () => {
  const userInfo = Cookies.get('u_inf');
  if (!userInfo) {
    window.location.href = XPP_FPF_URL;
  }
  const userId = JSON.parse(userInfo).userId;
  // const [user, setUser] = useState(null);
  // const signin = useCallback((account, password) => {
  // signin implementation
  // setUser(user from signin API)
  // }, []);

  return userId;
};