import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const isOpen = (state) => state.modal.isOpen;
export const type = (state) => state.modal.type;
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
