import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  GET_SECTION_NEWS_REQUEST,
  GET_SECTION_NEWS_SUCCESS,
  GET_SECTION_NEWS_FAILURE,
} from "./actions";
import { API_KEY } from "../../../utils/constants";

export function* watchSectionSaga() {
  yield takeLatest(GET_SECTION_NEWS_REQUEST, sectionSaga);
}

const fetchNewsBySection = async (section, sort, pageIndex) => {
  const res = await axios.get(
    `https://content.guardianapis.com/${section}?show-fields=headline,trailText,body,thumbnail&page=${pageIndex}&page-size=30&order-by=${sort}&api-key=${API_KEY}`
  );
  return res.data.response.results;
};

function* sectionSaga(action) {
  try {
    const results = yield call(
      fetchNewsBySection,
      action.section,
      action.orderBy,
      action.pageIndex
    );
    yield put({ type: GET_SECTION_NEWS_SUCCESS, results });
  } catch (error) {
    yield put({ type: GET_SECTION_NEWS_FAILURE, error });
  }
}
