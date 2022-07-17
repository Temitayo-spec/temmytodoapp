import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: "",
  openSidebar: false,
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
    resetModal: (state) => {
      state.isOpen = false;
      state.type = "";
    },
    setOpenSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
  },
});

export const isOpen = (state) => state.modal.isOpen;
export const type = (state) => state.modal.type;
export const openSidebar = (state) => state.modal.openSidebar;
export const { openModal, closeModal, resetModal, setOpenSidebar } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
