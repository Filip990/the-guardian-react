import { all, fork } from "redux-saga/effects";

import { watchFeedSaga } from "../pages/Home/store/sagas";
import { watchSearchSaga } from "../pages/Search/store/sagas";
import { watchSectionSaga } from "../pages/SectionDetails/store/sagas";

export default function* () {
  yield all([
    fork(watchFeedSaga),
    fork(watchSearchSaga),
    fork(watchSectionSaga),
  ]);
}
