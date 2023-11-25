import http from "./http-common";

const addReview = (review) => {
  return http.post("/review/user/createreview", review);
};

const getReviewBody = (reviewId) => {
  return http.get(`/review/getReview/${reviewId}`);
};
const reviewServices = {
  addReview,
  getReviewBody,
};

export default reviewServices;
