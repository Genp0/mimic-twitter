import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../../utils/tools';
const initialState = {
  username: "",
  name: "",
  password: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      state.isLoggedIn = false; 
    },
    setName: (state, action) => {
      state.name = action.payload;
      state.isLoggedIn = false; 
      setIsLoggedIn(state); 
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      state.isLoggedIn = false; 
    },
  },
});

const setIsLoggedIn = (state) => {
  if (state.username !== "" && state.name !== "" && state.password !== "") {
    state.isLoggedIn = true;
  } else {
    state.isLoggedIn = false;
  }
};

export const { setUsername, setName, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
