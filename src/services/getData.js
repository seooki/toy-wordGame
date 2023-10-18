import axios from "axios";

const getData = async (length, number) => {
  const url = "https://random-word-api.herokuapp.com/word";
  let queryParams = "?" + encodeURIComponent("length") + "=" + length;
  queryParams += "&" + encodeURIComponent("number") + "=" + number;

  const response = await axios.get(url + queryParams);
  const result = await response.data;
  return result;
};

export default getData;
