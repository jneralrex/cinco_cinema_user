import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: null,
  error: "",
};

export const logUser = createAsyncThunk(
  'user/logUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await Api.post(`${import.meta.env.VITE_BASE_URL}auth/signin`, credentials,{ withCredentials: true });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (credentials, { rejectWithValue }) => {
    try {
        const res = await Api.post(`auth/signup`, credentials,{ withCredentials: true });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
        const res = await Api.post(`auth/signout`, { withCredentials: true });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logUser.pending, (state) => {
        state.loading = true;
        state.error = ""; 
      })
      .addCase(logUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      })
      .addCase(logUser.rejected, (state, action) => {
        state.loading = false;
        state.user = '';
        state.error = action.payload; 
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = ""; 
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.user = '';
        state.error = action.payload; 
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = ""; 
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.user = '';
        state.error = action.payload; 
      })
  },
});

export default userSlice.reducer;
