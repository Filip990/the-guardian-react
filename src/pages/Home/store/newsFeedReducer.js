import {
  NEWS_FEED_REQUEST_START,
  NEWS_FEED_REQUEST_SUCCESS,
  NEWS_FEED_REQUEST_FAILURE,
} from "./Actions";
import produce from "immer";

const initialState = {
  news: [],
  isLoading: false,
  pageIndex: null,
  error: null,
};

const newsFeedReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case NEWS_FEED_REQUEST_START:
        draft.isLoading = true;
        break;
      case NEWS_FEED_REQUEST_SUCCESS:
        draft.news = action.sections;
        draft.isLoading = false;
        break;
      case NEWS_FEED_REQUEST_FAILURE:
        draft.error = action.error;
        draft.isLoading = false;
        break;

      default:
        return state;
    }
  });
};

export default newsFeedReducer;
