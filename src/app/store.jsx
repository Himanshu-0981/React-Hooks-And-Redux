import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "../features/counterSlice";

const store = configureStore({
  reducer: {
    count: counterReducers,
  },
});

export { store };
