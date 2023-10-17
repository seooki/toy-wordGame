import { useEffect, useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return <p>counter : {count}</p>;
};
