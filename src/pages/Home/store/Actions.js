export const NEWS_FEED_REQUEST_START = "NEWS_FEED_REQUEST_START";
export const NEWS_FEED_REQUEST_SUCCESS = "NEWS_FEED_REQUEST_SUCCESS";
export const NEWS_FEED_REQUEST_FAILURE = "NEWS_FEED_REQUEST_FAILURE";

export const newsFeedRequest = () => ({ type: NEWS_FEED_REQUEST_START });

export const newsFeedSuccess = (payload) => ({
  type: NEWS_FEED_REQUEST_SUCCESS,
  payload,
});

export const newsFeedFailure = (error) => ({
  type: NEWS_FEED_REQUEST_FAILURE,
  error,
});
