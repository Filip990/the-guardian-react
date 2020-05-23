import { takeLatest, call, put } from "redux-saga/effects";
import {
  NEWS_FEED_REQUEST_START,
  NEWS_FEED_REQUEST_SUCCESS,
  NEWS_FEED_REQUEST_FAILURE,
} from "./actions";
import { API_KEY } from "../../../utils/constants";

const sections = ["search", "lifeandstyle", "business", "world", "culture"];

export function* watchFeedSaga() {
  yield takeLatest(NEWS_FEED_REQUEST_START, fetchBySectionSaga);
}

const fetchNewsBySections = async (section) => {
  const res = await fetch(
    `https://content.guardianapis.com/${section}?show-fields=headline,trailText,body,thumbnail&page-size=6&api-key=${API_KEY}`
  );
  const json = await res.json();
  return json.response;
};

const getSections = () => {
  return Promise.all(sections.map((sec) => fetchNewsBySections(sec)));
};

function* fetchBySectionSaga() {
  try {
    const sections = yield call(getSections);
    yield put({ type: NEWS_FEED_REQUEST_SUCCESS, sections });
  } catch (error) {
    yield put({ type: NEWS_FEED_REQUEST_FAILURE, error });
  }
}
