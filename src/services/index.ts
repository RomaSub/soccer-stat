import { configureStore } from "@reduxjs/toolkit";
import { teamsApi } from "./teamsApi";

export default configureStore({
  reducer: {
    [teamsApi.reducerPath]: teamsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(teamsApi.middleware)
});
