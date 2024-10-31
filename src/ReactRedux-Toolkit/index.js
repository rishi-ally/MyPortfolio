import { createSlice } from "@reduxjs/toolkit";
const BlogSlice=createSlice({
name:"Blog",
initialState:{value:[]},
reducers:{
    setInfo:(state,action)=>{
state.value=action.payload  
console.log(state.value)  }
}
})
export const {setInfo}=BlogSlice.actions;
export default BlogSlice.reducer;