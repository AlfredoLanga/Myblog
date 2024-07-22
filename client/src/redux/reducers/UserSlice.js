import { createSlice } from "@reduxjs/toolkit";
import loginFecth from "../../assets/axios/config";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
     
     
    },
    token: false,
    isLogged: null,
    isAuthenticated: false,
    loading: null,
    error : null
  },
  reducers: {
    loginPendind:(state, action)=>{
      state.loading = true

    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.token = true;
      state.isLogged = true;
      state.loading = false
      state.error = null
    },
    loginFailure: (state, action) => {
      delete loginFecth.defaults.headers.Authorization;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state,action) => {
      state.user = {};
      state.isAuthenticated = false;
      state.token = false;
      state.isLogged = false;
      state.error = null
    }
  }
});

// Exportando actions geradas automaticamente pelo createSlice
export const {loginPendind, loginSuccess, loginFailure, logout } = userSlice.actions;

// Exportando o reducer gerado pelo createSlice
export default userSlice.reducer;
