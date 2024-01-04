import httpCommon from "./http-common";

const addReview = (review) => {
  return httpCommon.httpPrivate.post("/review/user/createreview", review);
};

const getReviewBody = (reviewId) => {
  return httpCommon.http.get(`/review/getReview/${reviewId}`);
};
const reviewServices = {
  addReview,
  getReviewBody,
};

export default reviewServices;
