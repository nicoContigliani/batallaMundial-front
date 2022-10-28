import { useNavigate } from "react-router-dom";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    status: "idle",
    loading: true,
    isAuthenticated: false,
    user: [],
  };

  export const getUserAsync = createAsyncThunk("getUser", async (datas) => {})