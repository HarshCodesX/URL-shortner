import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slice/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        //we can add more reducers as our app grows
    }
})

export default store;