import produce from "immer";
import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "./Actions";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_SUCCESS:
        draft.user = action;
        debugger;
        break;
      default:
        return state;
    }
  });
};

export default userReducer;
