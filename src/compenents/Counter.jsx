import { useEffect, useState, useRef } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const boolean = props.toggle;
    setMount(boolean);
    if (props.reset == true) {
      setCount(0);
    }
  }, [props]);

  let interval;

  useEffect(() => {
    if (mount == true) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, [mount]);

  useEffect(() => {
    if (count > 5) {
      clearInterval(interval);
      setCount(0);
      alert("탈락!");
    }
  }, [count]);

  return <p>counter : {count}초</p>;
};
