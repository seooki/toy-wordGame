import { useEffect, useRef, useState } from "react";
import getData from "../services/getData";

export const Word = (props) => {
  const [word, setWord] = useState();
  const [btnState, setBtnState] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    setBtnState(props.toggle);
  }, [props]);

  useEffect(() => {
    if (isMounted == true) {
      console.log(word);
    }
  }, [word]);

  return (
    <div>
      <span>단어: {word}</span>
    </div>
  );
};
