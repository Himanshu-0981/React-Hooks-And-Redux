import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { color } from "./themeSlice";

const Theme = () => {
  const [myColor] = useState("red");
  const dispatch = useDispatch();
  return (
    <>
      <br />
      <div>
        <button onClick={() => dispatch(color(myColor))}> dark mode</button>
      </div>
    </>
  );
};

export default Theme;
