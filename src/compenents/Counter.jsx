import { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";

const Div = styled.div`
  width: 100px;
  margin: 10px auto;
`;

export const Counter = (props) => {
  const [count, setCount] = useState(5);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const boolean = props.toggle;
    setMount(boolean);
    if (props.reset == true) {
      setCount(5);
    }
  }, [props]);

  useEffect(() => {
    let interval;
    if (mount == true) {
      interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        setCount(5);
      };
    }
  }, [mount]);

  return (
    <Div>
      <p>남은시간 : {count}초</p>
    </Div>
  );
};
