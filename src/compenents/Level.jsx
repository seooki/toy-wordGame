import { useState } from "react";

export const Level = () => {
  const [selectLevel, setSelectLevel] = useState();

  const onChangeSelectLevel = (e) => {
    setSelectLevel(e.target.innerHTML);
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
