import { configureStore } from "@reduxjs/toolkit";
import fitnessReducer from "features/GoalsSlice";
import userReducer from "features/UserSlice";

export const store = configureStore({
  reducer: {
    fitness: fitnessReducer,
    user: userReducer,
  },
});
