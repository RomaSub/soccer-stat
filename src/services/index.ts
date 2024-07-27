import { configureStore } from "@reduxjs/toolkit";
import { footballApi } from "./footbalApi";

export default configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(footballApi.middleware)
});
