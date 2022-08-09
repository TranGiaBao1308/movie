import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlice from "./slices/nguoiDungSlice";

export const storeToolkit = configureStore({
  reducer: {
    nguoiDungSlice,
  },
});
