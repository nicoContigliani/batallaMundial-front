// import axios from "axios";
import urlJson from "../../../urlJson.json";
import { useNavigate } from "react-router-dom";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import IndexAxios from "../../../services/axios/Index";
import writteToken from "../../../services/tokens/writteToken";

const initialState = {
  value: 0,
  status: "idle",
  loading: true,
  isAuthenticated: false,
  user: [],
};

// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount) => {
//       const response = await fetchCount(amount);
//       // The value we return becomes the `fulfilled` action payload
//       return response.data;
//     }
//   );

export const loginAsync = createAsyncThunk("login", async (datas) => {
  const urlData = urlJson.method.find(item => item.typeUrl === 'login')

  const data = {
    token: ``,
    method:
      urlData.methot ||
      `post`,
    url:
      urlData.url ||
      `http:///localhost:3001/api/auth/auth/login`,
    datas,
  };
  const dataIndexAxios = await IndexAxios(data);
  if (dataIndexAxios) {
    dataIndexAxios.data.isAuthenticated = "true"
    const resWriteToken = await writteToken(dataIndexAxios.data);
    const navigate = useNavigate();
    navigate('/')
  }

  return dataIndexAxios?.data;
});
export const loginOutAsync = createAsyncThunk("loginOut", async () => {

  // const data = { token: '', rest: [], isAuthenticated: 'false' }
  // await localStorage.setItem("items", JSON.stringify(data));
  // localStorage.clear();
  localStorage.removeItem('items');

  const navigate = useNavigate();
  navigate('/auths')
  
  // navigate('/public')
  // const resWriteToken = await writteToken(data);




});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.user = action.payload;
    },

  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loginOutAsync.fulfilled]: (state, action) => {
      // Add user to the state array
      state.user = [];
      state.isAuthenticated = "false";
      state.loading = "false";
    },
    [loginAsync.fulfilled]: (state, action) => {
      // Add user to the state array
      state.user = action.payload;
      state.isAuthenticated = "true";
      // state.pokemon.push(action.payload);
      state.loading = "false";

    },
  },
});

export const { incrementByAmount } = loginSlice.actions;
export const selectLogin = (state) => state.login;
export const selectLoginOut = (state) => state.login;

export default loginSlice.reducer;
