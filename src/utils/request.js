// axios 實例建立
import axios from 'axios'

// 目前作法，但這樣動態改變主機API，是不會變動的!
import { dev } from '../../public/apiPath.json';

const service = axios.create({
  baseURL: dev,
  withCredentials: true,
  timeout: 1000 * 10,
});

service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

service.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default service;


// 問了社群，目前想法是寫成 function，但目前沒成功QQ
// function getApi() {
//   return axios.get('../../public/apiPath.json')
// }

// let instance = undefined;

// async function getService() {
  
//   if (instance) {
//     return instance
//   }

//   const { data } = await getApi()

//   instance = axios.create({
//     baseURL: data.dev,
//     withCredentials: true,
//     timeout: 1000 * 10,
//   });
  
//   instance.interceptors.request.use(
//     (config) => config,
//     (error) => Promise.reject(error),
//   );
  
//   instance.interceptors.response.use(
//     (response) => response.data,
//     (error) => Promise.reject(error),
//   );

//   return instance

// }

// export default getService