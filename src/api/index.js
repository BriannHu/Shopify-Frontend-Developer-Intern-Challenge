import axios from "axios";
import store from "../store";
import { format } from "date-fns";

const API_KEY = process.env.REACT_APP_NASA_API_KEY;

store.subscribe(listener);

let startDate = store.getState().startDate.value;

function select(state) {
  return state.startDate.value;
}

function listener() {
  startDate = select(store.getState());
}

export const fetchPosts = () => {
  const url = `https://api.nasa.gov/planetary/apod?start_date=${format(
    new Date(startDate),
    "yyyy-MM-dd"
  )}&api_key=${API_KEY}`;
  return axios.get(url);
};
