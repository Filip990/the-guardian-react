export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const newsFeedRequest = () => ({ type: LOG_IN_START });
export const logInSuccess = (payload) => ({
  type: LOG_IN_SUCCESS,
  payload,
});
export const newsFeedFailure = (error) => ({
  type: LOG_IN_FAILURE,
  error,
});
