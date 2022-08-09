import { START_SPINNER, END_SPINNER } from "store/constants/spinner.constants";
let initialState = {
  loading: false,
};
export const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SPINNER: {
      state.loading = true;
      return { ...state };
    }

    case END_SPINNER: {
      state.loading = false;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
