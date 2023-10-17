import axios from "axios";

const getData = async () => {
  const url = "https://random-word-api.herokuapp.com/word";
  const response = await axios.get(url);
  const result = await response.data;
  return result;
};

export default getData;
