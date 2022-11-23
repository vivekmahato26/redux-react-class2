import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import counterSlice from "./slices/counterSlice";
import ProductsSlice from "./slices/productsSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        cart: cartSlice.reducer,
        products: ProductsSlice.reducer
    }
})

export default store;