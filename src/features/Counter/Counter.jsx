import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increaseByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  return (
    <>
      <h3>counter : {count}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(increaseByAmount(Number(input)))}>
        Increase By 10
      </button>
    </>
  );
};

export default Counter;
