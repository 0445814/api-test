// axios 實例建立
import axios from 'axios'

const instance = axios.create({
  baseURL: '../../public/apiPath.json',
  withCredentials: true,
  timeout: 1000 * 10,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default instance