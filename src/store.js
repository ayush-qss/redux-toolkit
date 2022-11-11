import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import modalSlice from "./features/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});
