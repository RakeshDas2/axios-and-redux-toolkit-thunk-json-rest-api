import { configureStore } from "@reduxjs/toolkit";

import postDataReducer from './allSlice'
export const store=configureStore({
    reducer:{
        postData:postDataReducer
    }
})