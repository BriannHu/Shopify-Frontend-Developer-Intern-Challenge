import { UPDATE_LOADING_DATA } from "../constants/actionTypes";

const loadingDataReducer = (state = false, action) => {
  switch (action.type) {
    case UPDATE_LOADING_DATA:
      return { ...state, value: !state.value };
    default:
      return state;
  }
};

export default loadingDataReducer;
