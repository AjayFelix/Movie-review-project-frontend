import React, { useState, useEffect } from "react";
import "./Reviews.css";
import reviewServices from "../../api/ReviewServices";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
const Reviews = ({ movie }) => {
  const reviewIds = movie ? movie.reviewIds || [] : [];
  const [body, setBody] = useState("");
  const [reviewBodies, setReviewBodies] = useState([]);

  const authorities = localStorage.getItem("authorities");
  const imdbId = movie.imdbId;

  const addReview = async () => {
    try {
      if (authorities && authorities.length > 0) {
        const reviewData = {
          imdbId: imdbId,
          body: body,
        };

        if (body !== "") {
          const response = await reviewServices.addReview(reviewData);
          if (response.status === 200) {
            Swal.fire({
              title: "Good job!",
              text: "added review successfully",
              icon: "success",
            });

            setBody("");
            setReviewBodies((prevReviewBodies) => [
              ...prevReviewBodies,
              response.data,
            ]);
          }
        } else {
          Swal.fire({
            text: "Please add your review!",
            icon: "warning",
          });
        }
      } else {
        Swal.fire("Please you need to login first");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchReviews = async () => {
    try {
      const fetchedReviews = await reviewServices.getReviews(imdbId);
      setReviewBodies(fetchedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [imdbId]);

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="review">
      <label className="form-label">
        {reviewIds.length > 0 ? `${reviewIds.length} reviews` : "No reviews"}
      </label>

      <textarea
        value={body}
        onChange={handleChange}
        className="input-area"
        placeholder="Enter your review"
      ></textarea>

      <Button variant="outline-info" className="submit-btn" onClick={addReview}>
        Submit
      </Button>

      {reviewIds.length > 0 ? (
        <div className="reviewList">
          {reviewIds.map((review, index) => (
            <div key={index}>
              {review.body} <hr style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default Reviews;
