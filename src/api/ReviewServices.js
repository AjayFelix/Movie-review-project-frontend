import http from "./http-common";

const addReview = (review, JWTtoken) => {
  return http.post("/review/user/createreview", review, {
    headers: {
      Authorization: `Bearer ${JWTtoken}`,
      "Content-Type": "application/json",
    },
  });
};

const getReviewBody = (reviewId) => {
  return http.get(`/review/getReview/${reviewId}`);
};
const reviewServices = {
  addReview,
  getReviewBody,
};

export default reviewServices;
