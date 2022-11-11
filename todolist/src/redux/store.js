import { configureStore } from "@reduxjs/toolfit";
import todos from "./todos";
//aa
export default configureStore({
    reducer:{
        todos,

    },
});