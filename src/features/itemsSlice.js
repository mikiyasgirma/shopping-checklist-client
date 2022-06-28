import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/";

const initialState = {
  items: [],
  addItems: "",
  removeItems: "",
  updateItems: "",
};

export const addItems = createAsyncThunk(
  "items/addItems",
  async (item, thunkAPI) => {
    try {
      const response = await axios.post(baseURL + "items", { item });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default itemsSlice.reducer;
