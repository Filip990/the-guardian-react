export const INPUT_VALUE_CHANGE = "INPUT_VALUE_CHANGE";
export const SEARCH_NEWS_REQUEST_START = "SEARCH_NEWS_REQUEST_START ";
export const SEARCH_NEWS_REQUEST_SUCCESS = "SEARCH_NEWS_REQUEST_SUCCESS";
export const SEARCH_NEWS_REQUEST_FAILURE = "SEARCH_NEWS_REQUEST_FAILURE";
export const TERM_CHANGE = "TERM_CHANGE";

export const termChange = () => ({
  type: TERM_CHANGE,
});

export const updateInputValue = (value) => ({
  type: INPUT_VALUE_CHANGE,
  value,
});
export const searchNewsRequest = (term, index) => ({
  type: SEARCH_NEWS_REQUEST_START,
  term,
  index,
});
export const searchNewsSuccess = (payload) => ({
  type: SEARCH_NEWS_REQUEST_SUCCESS,
  payload,
});
export const searchNewsFailure = (error) => ({
  type: SEARCH_NEWS_REQUEST_FAILURE,
  error,
});
