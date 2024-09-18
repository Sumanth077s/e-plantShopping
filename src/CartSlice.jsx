import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const plant = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === plant.name);
      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If item does not exist, add it with quantity 1
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    // Remove an item from the cart based on its name
    removeItem: (state, action) => {
      const plantName = action.payload;
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== plantName);
    },
    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        // Update the quantity if the item is found
        item.quantity = quantity;
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
