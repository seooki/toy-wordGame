import axios from "axios";

const getData = async (length, number) => {
  const response = await axios.get(
    "https://random-word-api.herokuapp.com/word?number=100"
  );
  const result = await response.data;
  return result;
};

export default getData;

//난이도 입력 -> 난이도에 맞는 데이터 불러옴 -> 시작버튼 누름 -> 스탑워치 시작 ->
