import { createSlice } from '@reduxjs/toolkit';
let token = localStorage.getItem('userauthToken')
const initialState = {
  userauth: token ? true : null
};

const UserauthSlice = createSlice({
  name: 'userauth',
  initialState,
  reducers: {
    setAuth: (state) => {
      console.log('setAuth reducer called');
      state.userauth = true ;
      console.log(localStorage.getItem('userauthToken'))

    },
    clearAuth: (state) => {
      state.userauth = null;
      console.log('setAuth reducer discalled');
      console.log(token)

    },
  },
});

export const { setAuth, clearAuth } = UserauthSlice.actions;
export default UserauthSlice.reducer;
