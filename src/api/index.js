import fetchAPI from "../utils/fetchAPI";
import request from "../utils/request";
import getDomain from "../utils/domain";

export async function showPost() {
  const { dev, prod } = await fetchAPI();
  const domain = getDomain({ dev, prod });

  return request({
    url: `${domain}/posts`,
    method: "get",
  });
}

// import { request, axios } from '../utils/request';

// function get() {
//   return request().then((response) => {
//     const { dev, action } = response;
//     return axios.get(`${dev}/${action.get}`);
//   });
// }

// export { get };
