import http from "./http-common";

const addReview = (review) => {
  return http.post("/review/createreview", review);
};
const getReviewBody = (reviewId) => {
  return http.post(`/review/getReview/${reviewId}`);
};
const reviewServices = {
  addReview,
  getReviewBody,
};

export default reviewServices;
