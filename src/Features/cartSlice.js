import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, image, title, price, quantity = 1 } = action.payload;
      const existingItem = state.CartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * price;
      } else {
        state.CartItems.push({
          id,
          image,
          title,
          quantity,
          price,
          totalPrice: quantity * price
        });
      }
      console.log('Current cart items:', state.CartItems);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.CartItems = state.CartItems.filter((item) => item.id !== itemIdToRemove);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;