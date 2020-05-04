import {
  SEARCH_NEWS_REQUEST_START,
  SEARCH_NEWS_REQUEST_SUCCESS,
  SEARCH_NEWS_REQUEST_FAILURE,
  INPUT_VALUE_CHANGE,
  TERM_CHANGE,
} from "./Actions";
import produce from "immer";

const initialState = {
  results: [],
  inputValue: "",
  isLoading: false,
  pageIndex: 1,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case INPUT_VALUE_CHANGE:
        draft.inputValue = action.value;
        draft.pageIndex = 1;
        break;
      case TERM_CHANGE:
        draft.results = [];
        break;
      case SEARCH_NEWS_REQUEST_START:
        draft.isLoading = true;
        draft.pageIndex = action.index;
        break;

      case SEARCH_NEWS_REQUEST_SUCCESS:
        draft.results = [...draft.results, ...action.results];
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
