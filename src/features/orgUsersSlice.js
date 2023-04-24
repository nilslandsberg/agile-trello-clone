import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import authHeader from "../services/auth-header";

const API_URL = 'https://trello-clone-api-crxa.onrender.com/api/users/'
export const fetchOrgUsersAction = createAsyncThunk("orgUsers/fetch", async(organization, rejectWithValue) => {
  try {
    const { data } = await axios.get(API_URL + organization, authHeader());
    return data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

const initialState = {
  orgUsers: null
}

const orgUsersSlice = createSlice({
  name: "orgUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrgUsersAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrgUsersAction.fulfilled, (state, action) => {
      state.orgUsers = action?.payload.usersByOrganization;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchOrgUsersAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
      state.orgUsers = null; 
    });
  }
});

export default orgUsersSlice.reducer;

