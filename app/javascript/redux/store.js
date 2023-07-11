import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from "./slices/greetingSlice";

export const store = configureStore({
  reducer: {
    greeting: greetingSlice
  }
})