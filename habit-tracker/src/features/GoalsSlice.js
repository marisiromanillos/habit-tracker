import { createSlice } from "@reduxjs/toolkit";

const initGoalsState = {
  goalsList: [],
  loading: "idle",
  error: null,
};

const goalsSlice = createSlice({
  name: "fitness",
  initialState: initGoalsState,
  reducers: {
    storeData: (state, action) => {
      state.goals = action.payload;
    },
  },
});

export const { storeData } = goalsSlice.actions;

// use useSelector in the component you want to bring in the state
export const selectGoals = (state) => state.fitness.goals;

export default goalsSlice.reducer;
