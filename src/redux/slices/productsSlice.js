import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productApi } from "../../constants";

const ProductsSlice = createSlice({
    name:"Products",
    initialState: {
        value : []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending,(state,action)=> {
            state.value = [];
            state.status = "pending";
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.value = action.payload;
            state.status = "fulfilled";
            state.error = null;
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status = "rejected";
            state.error = action.payload;
        })
    }
})


export const fetchProducts = createAsyncThunk("Products/fetch", async ()=> {
    try {
        const {data} = await axios.get(productApi);
        return data;
    } catch (error) {
        return error;
    }
})

export default ProductsSlice;