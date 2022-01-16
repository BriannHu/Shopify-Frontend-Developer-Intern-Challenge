import { UPDATE_START_DATE } from "../constants/actionTypes";

export const updateStartDate = (data) => ({
  type: UPDATE_START_DATE,
  payload: data,
});
