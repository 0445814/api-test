// API 統一管理
import { request, axios } from '../utils/request';

function get() {
  return request().then((response) => {
    const { dev, action } = response;
    return axios.get(`${dev}/${action.get}`);
  });
}

export { get };
