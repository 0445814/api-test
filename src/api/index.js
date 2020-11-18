// API 統一管理
import Axios from 'axios';
import request from '../utils/request';

function get() {
  return request()
    .then((response) => {
      const { dev, action } = response;
      return Axios.get(`${dev}/${action.get}`);
    })
    .then((response) => {
      return response.data;
    });
}

export { get };
