import apis from "apis";
import { SET_BANNER_LIST } from "store/constants/movie.constants";

export const setBannerListAction = (bannerList) => {
  return {
    type: SET_BANNER_LIST,
    payload: bannerList,
  };
};

export const fetchBannerListAsyncAction = () => {
  return async (dispatch) => {
    try {
      const data = await apis.getBannerListAPI();
      dispatch(setBannerListAction(data.content));
    } catch (error) {
      throw error;
    }
  };
};
