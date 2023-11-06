import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import feeds_fetching from "./axios/constant";

export const fetchFeeds = async (user_d) => {
    try {
      console.log("Reached the fetch feeds")
      const response = await axios.get(`http://localhost:8003/api/packeposts/?user_id=${user_d}`); 

      console.log("data from the feeds",response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  };