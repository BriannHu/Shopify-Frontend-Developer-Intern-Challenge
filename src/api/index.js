import axios from "axios";
import store from "../store";
import { format } from "date-fns";

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
  )}&api_key=3GrAXF8MRVey4jCigZSbilKcd2Dx7deMftfp60g3`;
  return axios.get(url);
};
