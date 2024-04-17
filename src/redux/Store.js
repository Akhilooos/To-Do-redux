import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "./Todoslice";
import UserSlice from "./UserSlice";
const store=configureStore({
    reducer:{
        todos:Todoslice,
        users:UserSlice
    }
})
export default store;