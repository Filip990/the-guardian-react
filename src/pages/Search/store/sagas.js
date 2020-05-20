import { takeLatest, call, put } from "redux-saga/effects";
import {
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_FAILURE,
} from "./Actions";
import { API_KEY } from "../../../utils/constants";

export function* watchSearchSaga() {
  yield takeLatest(SEARCH_NEWS_REQUEST, searchSaga);
}

const getResults = async (inputVal, pageIndex, sort) => {
  const res = await fetch(
    `https://content.guardianapis.com/search?q=${inputVal}&show-fields=headline,trailText,body,thumbnail&page=${pageIndex}&page-size=30&order-by=${sort}&api-key=${API_KEY}`
  );
  const json = await res.json();
  return json.response.results;
};

function* searchSaga(action) {
  try {
    const results = yield call(
      getResults,
      action.term,
      action.index,
      action.order
    );
    yield put({ type: SEARCH_NEWS_SUCCESS, results });
  } catch (error) {
    yield put({ type: SEARCH_NEWS_FAILURE, error });
  }
}
