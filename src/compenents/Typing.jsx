import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const TypingBoard = styled.div`
  text-align: center;
  margin: 10px 0;
  padding: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid grey;
`;

const Button = styled.input`
  display: none;
`;

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
    props.clearCounter();
  };

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (isMounted.current == true && submitValue == props.word) {
      setSucessWord(sucessWord + 1);
      props.getRandomWord();
    } else if (isMounted.current == true && submitValue != props.word) {
      alert("틀렸습니다.");
    }
  }, [submitValue]);

  return (
    <TypingBoard>
      <form onSubmit={onSubmit}>
        <Input
          onChange={onChangeValue}
          type="text"
          placeholder="단어 입력"
          value={inputValue || ""}
        ></Input>
        <Button onClick={onSubmit} type="button" value={"ENTER"}></Button>
      </form>
      <p>맞춘개수: {sucessWord}</p>
    </TypingBoard>
  );
};
