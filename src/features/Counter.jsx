import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>counter : {count}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default Counter;
