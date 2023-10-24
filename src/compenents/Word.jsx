import { useEffect, useRef, useState } from "react";
import getData from "../services/getData";
import { styled } from "styled-components";

const Div = styled.div`
  width: 500px;
  height: 70px;
  line-height: 70px;
  font-size: 70px;
  text-align: center;

  margin: 30px auto;
  padding: 10px;
`;

const EmptyWord = styled.span`
  font-size: 16px;
`;

export const Word = (props) => {
  const [word, setWord] = useState();
  const [btnState, setBtnState] = useState();
  const isMounted = useRef(false);
  const emptyWord = "시작 버튼이 활성화 되면 버튼을 눌러주세요.";

  useEffect(() => {
    setBtnState(props.toggle);
    setWord(props.word);
    isMounted.current = true;
    console.log(props.checkedWordArr);
  }, [props]);

  return (
    <Div>
      {props.checkedWordArr === false ? (
        <EmptyWord>{emptyWord}</EmptyWord>
      ) : (
        <span>{word}</span>
      )}
    </Div>
  );
};
