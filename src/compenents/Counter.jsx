import { useEffect, useState, useRef } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [btnState, setBtnState] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = props.toggle;
    setBtnState(props.toggle);
  }, [props.toggle]);

  useEffect(() => {
    if (isMounted.current == true) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        setCount(0);
      };
    }
  }, [btnState]);

  return <p>counter : {count}초</p>;
};
