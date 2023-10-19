import { useEffect, useState, useRef } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const boolean = props.toggle;
    setMount(boolean);
  }, [props]);

  useEffect(() => {
    if (mount == true) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        setCount(0);
      };
    }
  }, [mount]);

  return <p>counter : {count}초</p>;
};
