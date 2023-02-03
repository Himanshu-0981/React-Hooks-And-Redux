import { createSlice } from "@reduxjs/toolkit";

const initialTheme = {
  color: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    // color: (state) => {
    //   state.color = color;
    // },
    color: (state, actions) => {
      state.color = actions.payload;
    },
  },
});

export const { color } = themeSlice.actions;
export default themeSlice.reducer;
