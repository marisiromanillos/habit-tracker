import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api
const getGoals = createAsyncThunk("goals/get", async () => {
  //axios calls the api
  const response = await axios.get(`/goals`);
  return response.data;
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
    [getGoals.fulfilled]: (state) => {
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
