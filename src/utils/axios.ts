import axios from 'axios';
// config
import { HOST_API_KEY } from '../config-global';
import { setSession } from '../components/Auth/utils';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY }); //prod
// const axiosInstance = axios.create({ baseURL: 'https://overseer-backend-dev.azurewebsites.net' }); //dev

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      if (
        !window.location.href.includes('/auth/') &&
        !window.location.href.includes('/reset') &&
        !window.location.href.includes('/verify') &&
        !window.location.href.includes('/account-confirm')
      ) {
        setSession(null, null);
      }
    }
    return Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    );
  },
);

export default axiosInstance;
