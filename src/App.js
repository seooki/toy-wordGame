import { useEffect, useState } from "react";

import { Word } from "./compenents/Word";
import { Typing } from "./compenents/Typing";
import { Level } from "./compenents/Level";

function App() {
  const [word, setWord] = useState();
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState();

  const getLevel = (param) => {
    setLevel(param);
  };
  const checkWord = () => {};

  const startGame = () => {
    let sum = 0;
    setInterval(() => {
      setCount((sum += 1));
    }, 1000);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  const returnWord = (param) => {
    setWord(param);
  };

  return (
    <>
      <Level getLevel={getLevel}></Level>
      <div>
        <button onClick={startGame}>시작</button>
      </div>
      <Typing></Typing>
      <Word returnWord={returnWord}></Word>
    </>
  );
}

export default App;
