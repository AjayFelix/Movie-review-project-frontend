import React from "react";
import "./ReviewList.css";
import reviewServices from "../../api/ReviewServices";
import { useState, useEffect } from "react";

const ReviewList = ({ movie }) => {
  const reviewIds = movie ? movie.reviewIds || [] : [];
  const [reviewBodies, setReviewBodies] = useState([]);

  if (reviewIds.length > 0) {
    return (
      <div>
        <p>
          {reviewIds.map((body, index) => (
            <span key={index}>
              {body.body} <hr />
            </span>
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>No reviews</p>
      </div>
    );
  }
};

export default ReviewList;
