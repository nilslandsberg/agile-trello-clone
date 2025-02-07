import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import authHeader from "../services/auth-header";

const API_URL = 'https://trello-clone-api-crxa.onrender.com/api/columns/'


//action
export const addColumnAction = createAsyncThunk("column/add", async(body, rejectWithValue) => {

  try {
    const { data } = await axios.post(API_URL, body, authHeader());

    return data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const updateColumnTitleAction = createAsyncThunk("columnTitle/update", async({id, title}, rejectWithValue) => {

  try {
    const { data } = await axios.patch(API_URL + id, { title: title }, authHeader());
    return data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const deleteColumnAction = createAsyncThunk("column/delete", async(id, rejectWithValue) => {

  try {
    const { data } = await axios.delete(API_URL + id, authHeader());
    return data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});



const columnsSlice = createSlice({
  name: "ColumnColumns",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addColumnAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addColumnAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(addColumnAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    });
    builder.addCase(updateColumnTitleAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateColumnTitleAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(updateColumnTitleAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    });
    builder.addCase(deleteColumnAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteColumnAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(deleteColumnAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    });
  }
});

export default columnsSlice.reducer