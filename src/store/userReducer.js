import produce from "immer";
import {
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
} from "../pages/LogIn/store/Actions";
import { SIGN_UP_FAILURE, SIGN_UP_START } from "../pages/SignUp/store/actions";

const initialState = {
  user: null,
  isLoading: false,
  logInError: null,
  signUpError: null,
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
      case LOG_IN_FAILURE:
        draft.isLoading = false;
        draft.logInError = action.error;
        break;
      case SIGN_UP_START:
        draft.isLoading = true;
        break;
      case SIGN_UP_FAILURE:
        draft.isLoading = false;
        draft.signUpError = action.error;
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
