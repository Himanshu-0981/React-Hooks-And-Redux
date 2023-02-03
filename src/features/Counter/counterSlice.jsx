import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },

    decrement: (state) => {
      state.value = state.value - 1;
    },

    increaseByAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const { increment, decrement, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
