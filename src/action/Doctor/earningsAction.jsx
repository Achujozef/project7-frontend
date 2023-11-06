
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";


const initialState = {
  selectedDate: null, 
  earnings: null,    
  balance: 0,      
  loading: false,
  error: null,
};


export const fetchEarnings = createAsyncThunk(
  "earnings/fetchEarnings",
  async (selectedDate) => {
    const response = await axios.get(`/api/earnings?date=${selectedDate}`);
    return response.data;
  }
);


const earningsSlice = createSlice({
  name: "earnings",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    withdrawFunds: (state, action) => {

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarnings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEarnings.fulfilled, (state, action) => {
        state.loading = false;
        state.earnings = action.payload;

        state.error = null;
      })
      .addCase(fetchEarnings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedDate, withdrawFunds } = earningsSlice.actions;
export default earningsSlice.reducer;
