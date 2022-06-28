import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  addItems: "",
  removeItems: "",
  updateItems: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default itemsSlice.reducer;
