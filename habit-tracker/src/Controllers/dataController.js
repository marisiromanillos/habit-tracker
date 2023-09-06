import axios from "axios";
import { store } from "../app/store";
import { storeData } from "../features/GoalsSlice";

export const getGoals = async () => {
  console.log(store);
  try {
    const response = await axios.get(`/goals`);
    console.log(response);
    store.dispatch(storeData(response.data));
  } catch (error) {}
};
