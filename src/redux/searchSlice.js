import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "", // Arama terimi burada tutulacak
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Arama terimini güncelleme
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
