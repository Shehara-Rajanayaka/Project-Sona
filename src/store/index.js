import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import appSlice from "./appSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,
        app:appSlice,
    }
})

export default store;