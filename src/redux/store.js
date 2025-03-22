import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cardSlice from "./cardSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    cards: cardSlice,
    search: searchSlice,
  },
});
