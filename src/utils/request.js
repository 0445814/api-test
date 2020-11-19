// axios 實例建立
import axios from "axios";

function getService({ url, method }) {
  const service = axios.create({
    baseURL: url,
    method,
    withCredentials: true,
    timeout: 1000 * 10,
  });

  service.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  service.interceptors.response.use(
    (response) => {
      console.log("攔截器有執行!");
      return response.data;
    },
    (error) => Promise.reject(error)
  );

  return service();
}

export default getService;

// function request() {
//   axios.create({
//     withCredentials: true,
//     timeout: 1000 * 10,
//   });

//   axios.interceptors.request.use(
//     (config) => config,
//     (error) => Promise.reject(error)
//   );

//   axios.interceptors.response.use(
//     (response) => response.data,
// 使用者沒有登入
//     (error) => Promise.reject(error)
//   );

//   return axios.get('../../public/apiPath.json');
// }

// export { request, axios };
