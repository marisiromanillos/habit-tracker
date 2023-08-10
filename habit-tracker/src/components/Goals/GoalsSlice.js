import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api
export const getGoals = createAsyncThunk("goals/get", async (thunkAPI) => {
  //axios calls the api
  try {
    const response = await axios.get(`/goals`);
    return response.data;
  } catch (error) {
    //catch error - destructured reject
    const { rejectWithValue } = thunkAPI;
    return rejectWithValue(error.response.data);
  }
});

const initGoalsState = {
  goalsList: [],
  loading: "idle",
  error: null,
};

const goalsSlice = createSlice({
  name: "goals",
  initialState: initGoalsState,
  reducers: {},
  extraReducers: {
    [getGoals.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [getGoals.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.goalsList = action.payload;
      }
    },
    [getGoals.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.error;
      }
    },
  },
});

export default goalsSlice.reducer;
