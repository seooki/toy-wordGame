import { useEffect, useState, useRef } from "react";

import { Word } from "./compenents/Word";
import { Typing } from "./compenents/Typing";
import { Level } from "./compenents/Level";
import { Counter } from "./compenents/Counter";
import getData from "./services/getData";

function App() {
  const [word, setWord] = useState();
  const [level, setLevel] = useState();
  const [levelLength, setLevelLength] = useState();
  const [toggle, setToggle] = useState(false);
  const [typingValue, setTypingValue] = useState();
  const isMounted = useRef(false);

  const getLevel = (param) => {
    const levelObj = param;
    setLevel(levelObj);
    isMounted.current = true;
  };

  const returnWord = (param) => {
    setWord(param);
  };

  const createBtnState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log(word);
  }, [word]);

  useEffect(() => {
    if (isMounted.current == true) {
      async function fetchData() {
        const data = await getData();
        setWord(data);
      }
      fetchData();
      isMounted.current = false;
    }
  }, [level]);

  const getTypingValue = (param) => {
    const paramValue = param;
    setTypingValue(paramValue);
  };

  return (
    <>
      <button onClick={createBtnState}>시작/정지</button>
      <Word returnWord={returnWord} toggle={toggle}></Word>
      <Counter toggle={toggle}></Counter>
      <Typing getTypingValue={getTypingValue} word={word}></Typing>
    </>
  );
}

export default App;
