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

const ResetBtn = styled.button`
  margin-top: 10px;
`;

export const Typing = (props) => {
  const [inputValue, setInputValue] = useState();
  const [submitValue, setSubmitValue] = useState();
  const [sucessWord, setSucessWord] = useState(0);
  const [diffCount, setDiffCount] = useState(0);
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
      props.componentsRerender(true);
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
      props.getRandomWord();
      setDiffCount((prev) => prev + 1);
      props.getFaild(true);
      props.componentsRerender(true);
    }
  }, [submitValue]);

  const resetSucessWord = () => {
    setSucessWord(0);
    setDiffCount(0);
  };

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
      <p>
        맞춘개수: {sucessWord}
        <br />
        틀린개수: {diffCount}
        <br />
        <ResetBtn onClick={resetSucessWord}>초기화</ResetBtn>
      </p>
    </TypingBoard>
  );
};
