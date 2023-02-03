import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
