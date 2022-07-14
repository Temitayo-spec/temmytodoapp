import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { goalReducer, todoReducer } from "./todos";
import { modalReducer } from "./modal";

export default configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    modal: modalReducer,
  },
});
