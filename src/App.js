import { useEffect, useState } from "react";

import { Word } from "./compenents/Word";
import { Typing } from "./compenents/Typing";
import { Level } from "./compenents/Level";

function App() {
  const [word, setWord] = useState();
  const [level, setLevel] = useState();
  const [toggle, setToggle] = useState(true);

  const getLevel = (param) => {
    setLevel(param);
  };

  const returnWord = (param) => {
    setWord(param);
  };

  return (
    <>
      <Level getLevel={getLevel}></Level>
      <div>
        <button>시작/정지</button>
      </div>
      <Typing></Typing>
      <Word returnWord={returnWord}></Word>
    </>
  );
}

export default App;
