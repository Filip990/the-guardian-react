import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  NEWS_FEED_REQUEST_START,
  NEWS_FEED_REQUEST_SUCCESS,
  NEWS_FEED_REQUEST_FAILURE,
} from "./Actions";
import { API_KEY } from "../../../constants";

export function* watchFeedSaga() {
  yield takeLatest(NEWS_FEED_REQUEST_START, fetchBySection);
}

const fetchLatestSection = async () => {
  try {
    const res = await fetch(
      `https://content.guardianapis.com/search?show-fields=headline,trailText,body,thumbnail&show-tags=keyword&show-blocks=body&show-elements=all&api-key=${API_KEY}`
    );
    const json = await res.json();
    return json.response.results;
  } catch (error) {
    return error;
  }
};

const fetchLifestyleSection = async () => {
  try {
    const res = await fetch(
      `https://content.guardianapis.com/lifeandstyle?show-fields=headline,trailText,body,thumbnail&page-size=6&api-key=${API_KEY}`
    );
    const json = await res.json();
    return json.response.results;
  } catch (error) {
    return error;
  }
};

const fetchBusinessSection = async () => {
  try {
    const res = await fetch(
      `https://content.guardianapis.com/business?show-fields=headline,trailText,body,thumbnail&page-size=6&api-key=${API_KEY}`
    );
    const json = await res.json();
    return json.response.results;
  } catch (error) {
    return error;
  }
};

const fetchWorldNewsSection = async () => {
  try {
    const res = await fetch(
      `https://content.guardianapis.com/world?show-fields=headline,trailText,body,thumbnail&page-size=6&api-key=${API_KEY}`
    );
    const json = await res.json();
    return json.response.results;
  } catch (error) {
    return error;
  }
};

const fetchCultureSection = async () => {
  try {
    const res = await fetch(
      `https://content.guardianapis.com/culture?show-fields=headline,trailText,body,thumbnail&page-size=6&api-key=${API_KEY}`
    );
    const json = await res.json();
    return json.response.results;
  } catch (error) {
    return error;
  }
};

function* fetchBySection() {
  try {
    const sections = yield all({
      latest: call(fetchLatestSection),
      lifestyle: call(fetchLifestyleSection),
      business: call(fetchBusinessSection),
      world: call(fetchWorldNewsSection),
      culture: call(fetchCultureSection),
    });
    yield put({ type: NEWS_FEED_REQUEST_SUCCESS, sections });
  } catch (error) {
    yield put({ type: NEWS_FEED_REQUEST_FAILURE, error });
  }
}
