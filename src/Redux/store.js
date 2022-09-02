import { configureStore } from "@reduxjs/toolkit";

import todoCounter from "../Redux/Counters/todoCounter";
import categoryList from "../Redux/Movie/categoryList";
export const store = configureStore({
    reducer:{
        todo:todoCounter,
        categories:categoryList,

    }
})
