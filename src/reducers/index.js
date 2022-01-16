import { combineReducers } from "redux";
import posts from "./posts";
import startDate from "./startDate";
import loadingData from "./loadingData";

export const reducers = combineReducers({
  posts,
  startDate,
  loadingData,
});
