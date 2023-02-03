import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/Counter/counterSlice";
import themeReducer from "../features/Theme/themeSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
    theme: themeReducer,
  },
});
