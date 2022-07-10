import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { goalReducer } from "./goals";

export default configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer
  },
});
