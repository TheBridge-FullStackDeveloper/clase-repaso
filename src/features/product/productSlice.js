import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(like.fulfilled,(state,action)=>{
       const productsUpdated= state.products.map(product =>{
        if(product._id == action.payload._id){
            product = action.payload
        }
        return product
       })
        state.products = productsUpdated 
    })
  },
});


export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      console.error(error);
    }
  });


  export const like = createAsyncThunk("products/like", async (id) => {
    try {
      return await productService.like(id);
    } catch (error) {
      console.error(error);
    }
  });
export default productSlice.reducer;
