import { configureStore } from "@reduxjs/toolfit";
import todos from "./todos";

export default configureStore({
    reducer:{
        todos,
    },
});