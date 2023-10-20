import { useEffect, useRef, useState } from "react";

export const Typing = (props) => {
  const [inputValue, setInputValue] = useState();
  const [submitValue, setSubmitValue] = useState();
  const [sucessWord, setSucessWord] = useState(0);
  const isMounted = useRef(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue != "") {
      setSubmitValue(inputValue);
      setInputValue("");
      isMounted.current = true;
    } else {
      isMounted.current = false;
      alert("단어를 입력해주세요");
    }
  };

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (isMounted.current == true && submitValue == props.word) {
      setSucessWord(sucessWord + 1);
      props.getRandomWord();
    }
  }, [submitValue]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeValue}
          type="text"
          placeholder="단어 입력"
          value={inputValue || ""}
        ></input>
        <input onClick={onSubmit} type="button" value={"ENTER"}></input>
      </form>
      <p>맞춘개수: {sucessWord}</p>
    </>
  );
};
