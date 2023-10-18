import { useEffect, useState } from "react";

export const Level = (props) => {
  const [selectLevel, setSelectLevel] = useState({
    length: "",
  });

  useEffect(() => {
    props.getLevel(selectLevel);
  }, [selectLevel]);

  const onChangeSelectLevel = (e) => {
    setSelectLevel(e.target.innerHTML);
    if (e.target.innerHTML == "하") {
      setSelectLevel({ length: 5 });
    } else if (e.target.innerHTML == "중") {
      setSelectLevel({ length: 10 });
    } else {
      setSelectLevel({ length: 15 });
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
