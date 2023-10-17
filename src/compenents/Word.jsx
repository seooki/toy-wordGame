import { useEffect, useState } from "react";
import getData from "../services/getData";

export const Word = (props) => {
  const [word, setWord] = useState();

  useEffect(() => {
    const data = getData();
    setWord(data);
  }, []);

  useEffect(() => {
    props.returnWord(word);
  }, [word]);

  return (
    <div>
      <span></span>
    </div>
  );
};
