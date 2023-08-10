import { createSlice } from "@reduxjs/toolkit";

const initGoalsState = {
  goalList: [],
  loading: "idle",
  error: null,
};

const goalsSlice = createSlice({
  name: "goals",
  initialState: initGoalsState,
  reducers: {},
  extraReducers: {},
});

export default goalsSlice.reducer;
