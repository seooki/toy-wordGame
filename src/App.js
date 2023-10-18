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
    if (isMounted == true) {
      async function fetchData() {
        const data = await getData(level.length, 10);
        setWord(data);
        isMounted.current = false;
      }
      fetchData();
    }
  }, []);

  const getTypingValue = (param) => {
    const paramValue = param;
    setTypingValue(paramValue);
  };

  return (
    <>
      <Level getLevel={getLevel}></Level>
      <Counter toggle={toggle}></Counter>
      <div>
        <button onClick={createBtnState}>시작/정지</button>
      </div>
      <Typing getTypingValue={getTypingValue}></Typing>
      <Word returnWord={returnWord} toggle={toggle}></Word>
    </>
  );
}

export default App;
