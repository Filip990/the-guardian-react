import { takeLatest, call, put } from "redux-saga/effects";
import {
  SEARCH_NEWS_REQUEST_START,
  SEARCH_NEWS_REQUEST_SUCCESS,
  SEARCH_NEWS_REQUEST_FAILURE,
} from "./Actions";
import { API_KEY } from "../../../constants";

export function* watchSearchSaga() {
  yield takeLatest(SEARCH_NEWS_REQUEST_START, searchSaga);
}

const getResults = async (inputVal) => {
  const res = await fetch(
    `https://content.guardianapis.com/search?q="${inputVal}"&show-fields=headline,trailText,body,thumbnail&page-size=30&order-by=newest&api-key=${API_KEY}`
  );
  const json = await res.json();
  return json.response.results;
};

function* searchSaga(action) {
  try {
    const results = yield call(getResults, action.term);
    yield put({ type: SEARCH_NEWS_REQUEST_SUCCESS, results });
  } catch (error) {
    yield put({ type: SEARCH_NEWS_REQUEST_FAILURE, error });
  }
}
