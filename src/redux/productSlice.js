import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getDetailProduct = createAsyncThunk(
  "products/getDetailProduct",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

export const getCategoryProduct = createAsyncThunk(
  "products/getCategoryProduct",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.productsStatus = STATUS.FAIL;
    });

    builder.addCase(getDetailProduct.pending, (state) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });
    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.productDetailStatus = STATUS.FAIL;
    });

    builder.addCase(getCategoryProduct.pending, (state) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getCategoryProduct.rejected, (state, action) => {
      state.productsStatus = STATUS.FAIL;
    });
  },
});

export default productSlice.reducer;
