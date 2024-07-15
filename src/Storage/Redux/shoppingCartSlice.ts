import { createSlice } from "@reduxjs/toolkit";
import { shoppingCartModel } from "../../Interfaces";

const initialState: shoppingCartModel = {
  cartItems: [],
};

export const shoppingCartSlice = createSlice({
  name: "cartItems",
  initialState: initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.cartItems = action.payload;
    },
    updateQuantity: (state, action) => {
      // payload - cart item that needs to be updated, new quantity
      state.cartItems = state.cartItems?.map((item) => {
        if (item.id === action.payload.cartItem.id) {
          item.quantity = action.payload.quantity;
        }
        // tetep harus balikin card card lain yang nggak di update qty nya
        // kalau nggak dibalikin semua, card yang ditampilin cuma yang qty nya di update
        return item;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems?.filter((item) => {
        if (item.id === action.payload.cartItem.id) {
          // jika id sama, remove current cart
          return null;
        }
        // tetep harus balikin card card lain yang nggak di remove
        return item;
      });
    },
  },
});

export const { setShoppingCart, updateQuantity, removeFromCart } =
  shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
