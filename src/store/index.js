import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlcie";

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
});
