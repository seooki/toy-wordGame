import { useEffect, useRef, useState } from "react";
import getData from "../services/getData";

export const Word = (props) => {
  const [word, setWord] = useState();
  const [btnState, setBtnState] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    setBtnState(props.toggle);
    setWord(props.word);
    isMounted.current = true;
  }, [props]);

  return (
    <div>
      <span>단어: {word}</span>
    </div>
  );
};
