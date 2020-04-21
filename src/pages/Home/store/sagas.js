import { takeLatest, call, put } from "redux-saga/effects";
import {
  NEWS_FEED_REQUEST_START,
  NEWS_FEED_REQUEST_SUCCESS,
  NEWS_FEED_REQUEST_FAILURE,
} from "./Actions";
import { API_KEY } from "../../../constants";

export function* watchFeedSaga() {
  yield takeLatest(NEWS_FEED_REQUEST_START, fetchFeedSaga);
}

const fetchNewsFeed = async () => {
  try {
    const res = await fetch(
      `https://content.guardianapis.com/search?show-fields=headline,body,thumbnail&show-tags=keyword&show-blocks=body&show-elements=all&api-key=${API_KEY}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};

function* fetchFeedSaga() {
  try {
    const res = yield call(fetchNewsFeed);
    const data = res.response;
    yield put({ type: NEWS_FEED_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({ type: NEWS_FEED_REQUEST_FAILURE, error });
  }
}
