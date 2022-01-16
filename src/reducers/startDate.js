import { parse } from "date-fns";
import { UPDATE_START_DATE } from "../constants/actionTypes";

const initialState = {
  value: localStorage.getItem("startDate")
    ? localStorage.getItem("startDate")
    : parse("2022-01-01", "yyyy-MM-dd", new Date()),
};

const startDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_START_DATE:
      localStorage.setItem("startDate", action.payload);
      state.value = action.payload;
      return state;
    default:
      return state;
  }
};

export default startDateReducer;
