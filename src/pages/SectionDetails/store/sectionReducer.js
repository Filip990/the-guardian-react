import {
  GET_SECTION_NEWS_REQUEST,
  GET_SECTION_NEWS_SUCCESS,
  GET_SECTION_NEWS_FAILURE,
  PAGE_INDEX_CHANGE,
  CHANGE_ORDER,
  SECTION_CHANGED,
} from "./Actions";
import produce from "immer";

const initialState = {
  sectionNews: [],
  isLoading: false,
  pageIndex: 1,
  error: null,
  orderBy: "newest",
};

const sectionReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case PAGE_INDEX_CHANGE:
        draft.pageIndex = action.index;
        break;
      case CHANGE_ORDER:
        draft.sectionNews = [];
        draft.orderBy = action.order;
        break;
      case SECTION_CHANGED:
        draft.sectionNews = [];
        break;
      case GET_SECTION_NEWS_REQUEST:
        draft.isLoading = true;
        break;
      case GET_SECTION_NEWS_SUCCESS:
        draft.isLoading = false;
        draft.sectionNews = [...draft.sectionNews, ...action.results];
        break;
      case GET_SECTION_NEWS_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      default:
        return state;
    }
  });
};

export default sectionReducer;
