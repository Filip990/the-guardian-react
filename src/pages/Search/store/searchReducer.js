import {
  SEARCH_NEWS_REQUEST_START,
  SEARCH_NEWS_REQUEST_SUCCESS,
  SEARCH_NEWS_REQUEST_FAILURE,
} from "./Actions";
import produce from "immer";

const initialState = {
  results: [],
  isLoading: false,
  pageIndex: null,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_NEWS_REQUEST_START:
        draft.isLoading = true;
        break;

      case SEARCH_NEWS_REQUEST_SUCCESS:
        draft.results = action.results;
        draft.isLoading = false;
        break;

      case SEARCH_NEWS_REQUEST_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      default:
        return state;
    }
  });
};

export default searchReducer;
