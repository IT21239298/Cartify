import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../auth/redux/authSlice";


import { authApi } from "../../auth/services/authService";
import productSlideReducer from "../../services/redux/productSlice";
import {apiSlice}  from "../../components/Store/apiSlice"



const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlideReducer,
   
    [authApi.reducerPath]:authApi.reducer,
    [apiSlice.reducerPath] : apiSlice.reducer
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authApi.middleware,apiSlice.middleware )
   
});
export default store;
