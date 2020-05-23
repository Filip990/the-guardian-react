export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  error,
});
export const signUpStart = () => ({ type: SIGN_UP_START });
