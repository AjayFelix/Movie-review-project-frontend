import React, { useState } from "react";
import "./Reviews.css";
import reviewServices from "../../api/ReviewServices";
import { Button } from "react-bootstrap";

const Reviews = ({ movie }) => {
  const [body, setBody] = useState("");
  const imdbId = movie.imdbId;
  const reviewIds = movie ? movie.reviewIds || [] : [];

  const addReview = async () => {
    try {
      const reviewData = {
        imdbId: imdbId,
        body: body,
      };

      if (body != "") {
        const response = await reviewServices.addReview(reviewData);
        console.log(reviewData);
        if (response.status === 200) {
          alert("Added successfully");
          setBody("");
        }
      } else {
        alert("please add your review");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
    </div>
  );
};

export default Reviews;
