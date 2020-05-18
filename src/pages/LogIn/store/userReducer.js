import produce from "immer";
import { LOG_IN_SUCCESS, LOG_OUT } from "./Actions";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_SUCCESS:
        draft.user = action;
        console.log(draft.user);
        break;
      case LOG_OUT:
        draft.user = null;
        break;
      default:
        return state;
    }
  });
};

export default userReducer;
