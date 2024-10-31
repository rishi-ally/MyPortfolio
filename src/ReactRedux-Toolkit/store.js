import blogSliceReducer from './index'
import { configureStore } from "@reduxjs/toolkit";
const Store=configureStore({
reducer:{
Blog:blogSliceReducer
}
})
export default Store;