import { useEffect, useReducer, useRef, useState } from "react";
import { styled } from "styled-components";

export const Level = (props) => {
  const [selectLevel, setSelectLevel] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current == true) {
      props.getLevel(selectLevel);
    }
    isMounted.current = false;
  }, [selectLevel]);

  const onChangeSelectLevel = (e) => {
    if (e.target.innerHTML == "하") {
      isMounted.current = true;
      setSelectLevel(5);
    } else if (e.target.innerHTML == "중") {
      isMounted.current = true;
      setSelectLevel(10);
    } else {
      isMounted.current = true;
      setSelectLevel(15);
    }
  };

  return (
    <ul>
      <li onClick={onChangeSelectLevel} value={"하"}>
        하
      </li>
      <li onClick={onChangeSelectLevel} value={"중"}>
        중
      </li>
      <li onClick={onChangeSelectLevel} value={"상"}>
        상
      </li>
    </ul>
  );
};
