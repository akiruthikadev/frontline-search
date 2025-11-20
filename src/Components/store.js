import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice';
const store = configureStore(
    {
        reducer :{
            counter:  reducer
        }
    }
)
export default store;