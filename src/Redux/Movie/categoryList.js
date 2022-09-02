import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");


let initialState = {
    categories:{genres:[]},
};


export const categoryListSlicer = createSlice({
    name:"categories",
    initialState,
    reducers:{
        setCategory:(state,value) =>{
           state.categories = value.payload;
        },
        
    }
})
export const getCategoryAsync = (data) => async (dispatch) => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a87898297a078d85fecce7aab9d8dbde&language=en-US");
      dispatch(setCategory(response.data));
    } catch (err) {
      throw new Error(err);
    }
  };
export const {setCategory} = categoryListSlicer.actions;

export default categoryListSlicer.reducer;