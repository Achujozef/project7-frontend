import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useraxios from "../../useraxios";

export const fetchUser = createAsyncThunk('user/fetchUser', async (id) => {
  console.log(id);
  const response = await useraxios.get(`api/user/${id}`,id);
  console.log(response.data);
  return response.data;
});

const UaseruserSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    email: '',
    phonenumber: '',
    image: '',
    done:false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { name, email, phonenumber, image } = action.payload;
        state.name = name;
        state.email = email;
        state.phonenumber = phonenumber;
        state.image = image;
        state.done = true;
      });
  },
});

export default UaseruserSlice.reducer;