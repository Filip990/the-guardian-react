export const GET_SECTION_NEWS_REQUEST = "GET_SECTION_NEWS_REQUEST ";
export const GET_SECTION_NEWS_SUCCESS = "GET_SECTION_NEWS_SUCCESS";
export const GET_SECTION_NEWS_FAILURE = "GET_SECTION_NEWS_FAILURE";
export const PAGE_INDEX_CHANGE = "PAGE_INDEX_CHANGE";
export const SECTION_CHANGED = "SECTION_CHANGED";

export const getSectionNewsRequest = (section, orderBy, pageIndex) => ({
  type: GET_SECTION_NEWS_REQUEST,
  section,
  orderBy,
  pageIndex,
});
export const getSectionNewsSuccess = (payload) => ({
  type: GET_SECTION_NEWS_SUCCESS,
  payload,
});
export const getSectionNewsFailure = (error) => ({
  type: GET_SECTION_NEWS_FAILURE,
  error,
});

export const changePageIndex = (index) => ({
  type: PAGE_INDEX_CHANGE,
  index,
});

export const changeSection = () => ({
  // dispatched from header component
  type: SECTION_CHANGED,
});
