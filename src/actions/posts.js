import * as api from "../api";
import store from "../store";
import { updateLoadingData } from "./loadingData";
import { FETCH_ALL } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    store.dispatch(updateLoadingData());
    const { data } = await api.fetchPosts();
    store.dispatch(updateLoadingData());
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    alert("Please enter a start date before today.");
    store.dispatch(updateLoadingData());
    console.log(error);
  }
};
