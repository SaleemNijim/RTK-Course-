import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./service/MainApi";


const store = configureStore({
   reducer :{
    [productApi.reducerPath]:productApi.reducer
   },
   middleware :(getDefaultMiddleware) =>{
    return getDefaultMiddleware().concat(productApi.middleware)  
     }
});

export default store;
