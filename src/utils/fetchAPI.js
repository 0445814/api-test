import axios from "axios";

const fetchAPI = async () => {
  const { data } = await axios.get("../../public/apiPath.json");
  return data;
};

export default fetchAPI;
