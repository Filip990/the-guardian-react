import produce from "immer";
import { LOG_IN_START, LOG_IN_SUCCESS, LOG_OUT } from "./Actions";

const initialState = {
  user: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_START:
        draft.isLoading = true;
        break;
      case LOG_IN_SUCCESS:
        draft.user = action;
        draft.isLoading = false;
        break;
      case LOG_OUT:
        draft.user = null;
        draft.isLoading = false;
        break;
      default:
        return state;
    }
  });
};

export default userReducer;
