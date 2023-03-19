import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    updateToken: (state, action) => {
      console.log("handle update:", action.payload);
      state.value = action.payload;
    },
    removeToken: (state, action) => {
      console.log("handle remove:", action.payload);
      state.value = action.payload;
    },
  },
});

export const { updateToken, removeToken } = tokenSlice.actions;
export const selectToken = (state) => state.token.value;
export default tokenSlice.reducer;
