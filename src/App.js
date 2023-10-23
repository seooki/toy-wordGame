import { useEffect, useState, useRef } from "react";

import { Word } from "./compenents/Word";
import { Typing } from "./compenents/Typing";
import { Level } from "./compenents/Level";
import { Counter } from "./compenents/Counter";
import getData from "./services/getData";

function App() {
  const [wordArr, setWordArr] = useState();
  const [toggle, setToggle] = useState(false);
  const [word, setWord] = useState();
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setWordArr(await getData());
    };
    fetchData();
  }, []);

  const toggleBtn = async () => {
    setToggle(!toggle);
    console.log(toggle);
    if (!toggle) {
      getRandomWord();
    } else {
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

  return (
    <>
      <button onClick={toggleBtn}>시작/정지</button>
      <Word word={word}></Word>
      <Counter toggle={toggle} reset={reset}></Counter>
      <Typing
        word={word}
        getRandomWord={getRandomWord}
        clearCounter={clearCounter}
      ></Typing>
    </>
  );
}

export default App;
