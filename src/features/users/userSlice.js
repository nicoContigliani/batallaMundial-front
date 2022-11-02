import { useNavigate } from "react-router-dom";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import urlJson from "../../urlJson.json";
import IndexAxios from "../../services/axios/Index";
import reedToken from "../../services/tokens/reedToken";



const initialState = {
  value: 0,
  status: "idle",
  loading: true,
  isAuthenticated: false,
  user: [],
};

export const getUserAsync = createAsyncThunk("getUser", async (datas) => {

  const urlData = urlJson.method.find(item => item.typeUrl === 'getusers')
  const getDataToken = await reedToken();

  const data = {
    token: getDataToken.token,
    method: urlData.methot || `getData`,
    url: urlData.url || `http://localhost:3001/users/users/`,
    datas,
  };
  const dataIndexAxios = await IndexAxios(data);


  console.log("🚀 ~ file: userSlice.js ~ line 34 ~ getUserAsync ~ da", dataIndexAxios?.data.data)
  return dataIndexAxios?.data?.data;
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.user = action.payload;
    },

  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed

    [getUserAsync.fulfilled]: (state, action) => {
      // Add user to the state array
      state.user = action.payload;
      state.isAuthenticated = "true";

    },
  },
});


export const { incrementByAmount } = userSlice.actions;
export const selectUser = (state) => state.user;


export default userSlice.reducer;
