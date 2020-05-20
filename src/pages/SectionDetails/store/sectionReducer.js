import {
  GET_SECTION_NEWS_REQUEST,
  GET_SECTION_NEWS_SUCCESS,
  GET_SECTION_NEWS_FAILURE,
  PAGE_INDEX_CHANGE,
  SECTION_CHANGED,
} from "./Actions";
import { CHANGE_ORDER } from "../../../store/Actions";
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
        draft.sectionNews = []; // clear the array on order change
        draft.orderBy = action.order;
        break;
      case SECTION_CHANGED:
        draft.sectionNews = []; // clear the array on section change
        break;
      case GET_SECTION_NEWS_REQUEST:
        draft.isLoading = true;
        break;
      case GET_SECTION_NEWS_SUCCESS:
        draft.isLoading = false;
        draft.sectionNews = [...draft.sectionNews, ...action.results];
        // spread the results for load more functionality...
        // which is why we manually clear the array on any prop change (section, page, order)
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
