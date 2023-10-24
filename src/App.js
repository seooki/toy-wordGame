import { useEffect, useState, useRef } from "react";

import { Word } from "./compenents/Word";
import { Typing } from "./compenents/Typing";
import { Counter } from "./compenents/Counter";
import getData from "./services/getData";
import { styled } from "styled-components";

const Board = styled.div`
  width: 700px;
  height: 400px;
  margin: auto;
  position: relative;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: skyblue;
  border: none;
  padding: 20px;
  font-size: 30px;
  margin: auto;
  display: block;
  width: 400px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px gray;
  }
`;

const DisabledButton = styled.button`
  background-color: skyblue;
  border: none;
  padding: 20px;
  font-size: 30px;
  margin: auto;
  display: block;
  width: 400px;
`;

const Header = styled.h1`
  border: 3px solid navy;
  border-radius: 22px;
  display: block;
  width: 420px;
  margin: 30px auto;
  padding: 30px;
  text-align: center;
`;

function App() {
  const [wordArr, setWordArr] = useState();
  const [checkedWordArr, setCheckedWordArr] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [word, setWord] = useState();
  const [reset, setReset] = useState(false);
  const [faild, setFaild] = useState(false);
  const [render, setRender] = useState(false);
  const [buttonValue, setBunttonValue] = useState("시작");

  const componentsRerender = (param) => {
    setRender(param);
  };

  useEffect(() => {
    if (render == true) {
      setRender(false);
    }
  }, [render]);

  useEffect(() => {
    const fetchData = async () => {
      setWordArr(await getData());
      setCheckedWordArr(true);
    };
    fetchData();
  }, []);

  const toggleBtn = async () => {
    setToggle(!toggle);
    if (!toggle) {
      setBunttonValue("중지");
      getRandomWord();
    } else {
      setBunttonValue("시작");
      setWord("");
    }
  };

  const clearCounter = () => {
    setReset(true);
  };

  const getRandomWord = () => {
    const arrIndex = Math.floor(Math.random() * 100);
    setWord(wordArr[arrIndex]);
  };

  const getFaild = (param) => {
    setFaild(param);
  };

  return (
    <>
      <Header>5초 영어낱말 랜덤 타자 연습</Header>
      <Board>
        <Word word={word} checkedWordArr={checkedWordArr}></Word>
        <Counter
          toggleBtn={toggleBtn}
          toggle={toggle}
          reset={reset}
          getFaild={getFaild}
          faild={faild}
        ></Counter>
        <Typing
          word={word}
          getRandomWord={getRandomWord}
          clearCounter={clearCounter}
          getFaild={getFaild}
          componentsRerender={componentsRerender}
        ></Typing>
        {checkedWordArr ? (
          <Button onClick={toggleBtn}>{buttonValue}</Button>
        ) : (
          <DisabledButton onClick={toggleBtn} disabled>
            단어를 불러오는 중입니다.
          </DisabledButton>
        )}
      </Board>
    </>
  );
}

export default App;
