// axios 實例建立
import axios from 'axios';

function request() {
  axios.create({
    withCredentials: true,
    timeout: 1000 * 10,
  });

  axios.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );

  return axios.get('../../public/apiPath.json').then((response) => response);
}

export { request, axios };
