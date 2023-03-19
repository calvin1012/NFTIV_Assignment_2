import { configureStore } from "@reduxjs/toolkit";
import token from "./slice/token";

export const store = configureStore({
  reducer: {
    token: token,
  },
});
