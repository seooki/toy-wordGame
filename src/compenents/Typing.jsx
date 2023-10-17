import { useState } from "react";

export const Typing = () => {
  const [checkWord, setCheckWord] = useState();

  const onChangeWord = (e) => {
    setCheckWord(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="단어 입력"
        onChange={onChangeWord}
      ></input>
      <input type="button" value={"ENTER"}></input>
    </form>
  );
};
