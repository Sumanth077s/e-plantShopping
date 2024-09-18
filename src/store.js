// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the reducer from CartSlice

const store = configureStore({
    reducer: {
        cart: cartReducer, // Associate the reducer with the 'cart' slice
    },
});
export default store