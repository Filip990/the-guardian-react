import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_FAILURE,
  INPUT_VALUE_CHANGE,
  TERM_CHANGE,
} from "./Actions";
import produce from "immer";

const initialState = {
  results: [],
  inputValue: "",
  searchTerm: "",
  isLoading: false,
  pageIndex: 1,
  orderBy: "newest",
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
      case SEARCH_NEWS_REQUEST:
        draft.isLoading = true;
        draft.pageIndex = action.index;
        draft.searchTerm = action.term;
        break;

      case SEARCH_NEWS_SUCCESS:
        draft.results = [...draft.results, ...action.results];
        draft.isLoading = false;
        break;

      case SEARCH_NEWS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      default:
        return state;
    }
  });
};

export default searchReducer;
