import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";


const initialState = {
  slots: [], 
  loading: false,
  error: null,
};


export const addSlots = createAsyncThunk("slots/addSlots", async (newSlots) => {
    console.log("Slot time",newSlots)
    const response = await axios.post("/slot_post/users/slots/", newSlots);
    const data = await response.data;
  return data; 
});


const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(addSlots.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSlots.fulfilled, (state, action) => {
        state.loading = false;

        state.slots = [...state.slots, ...action.payload];

        state.error = null;
      })
      .addCase(addSlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default slotSlice.reducer;
