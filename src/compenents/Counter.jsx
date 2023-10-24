import { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";

const Div = styled.div`
  width: 150px;
  margin: 10px auto;
  text-align: center;
`;

export const Counter = (props) => {
  const [count, setCount] = useState(5);
  const [mount, setMount] = useState(false);
  const [faild, setFaild] = useState();

  useEffect(() => {
    const boolean = props.toggle;
    setMount(boolean);
    if (props.reset == true) {
      setCount(5);
    }
  }, [props]);

  let interval;

  useEffect(() => {
    if (mount == true) {
      interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        setCount(5);
      };
    } else if (mount == false) {
      setMount(false);
    }
  }, [mount]);

  useEffect(() => {
    if (count < 0) {
      props.toggleBtn();
      alert("시간이 초과되었습니다.");
    }
  }, [count]);

  if (count < 0) {
    props.getFaild(true);
  }

  return (
    <Div>
      <p>남은시간 : {count}초</p>
    </Div>
  );
};
