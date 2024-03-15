import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";


import { authApi } from "../services/authService";



const store = configureStore({
  reducer: {
    auth: authReducer,
   
    [authApi.reducerPath]:authApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(authApi.middleware)
   
});
export default store;
