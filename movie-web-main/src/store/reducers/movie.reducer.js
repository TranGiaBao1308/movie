import { SET_BANNER_LIST } from "store/constants/movie.constants";

const initialState = {
  bannerList: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER_LIST:
      state.bannerList = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default movieReducer;
