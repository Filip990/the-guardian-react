import { all, fork } from "redux-saga/effects";

import { watchFeedSaga } from "../pages/Home/store/sagas";
import { watchSearchSaga } from "../pages/Search/store/sagas";

export default function* () {
  yield all([fork(watchFeedSaga), fork(watchSearchSaga)]);
}
