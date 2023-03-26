import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        //counter: counterSlice.reducer,
        //OR
        counter: counterReducer
    }
})