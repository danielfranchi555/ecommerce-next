import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import { dataApi } from "./services/getData"
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        productsApi: dataApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(dataApi.middleware) // No es necesario envolver dataApi.middleware en un array
})

setupListeners(store.dispatch)

export default store