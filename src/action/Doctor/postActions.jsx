import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from 'react-redux';

export const fetchDoctorPosts = createAsyncThunk(
  "posts/fetchDoctorPosts",
  async (_,thunkAPI) => {
    try {
     const user = thunkAPI.getState().login.user;
     console.log('The User in post Actionm',user)
      const response = await axios.get(`http://localhost:8003/api/posts/by-doctor/${user.id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  doctorPosts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.doctorPosts = action.payload;
      })
      .addCase(fetchDoctorPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
