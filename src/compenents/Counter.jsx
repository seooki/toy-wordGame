import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState();

  return <p>counter : {count}</p>;
};
