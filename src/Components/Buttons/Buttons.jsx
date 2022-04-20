import "./Buttons.css";
import React, { useState } from "react";

const LikeButton = (props) => {
  const [likeButton, setLikeButton] = useState("inactive");
  const [disLikeButton, setDisLikeButton] = useState("inactive");

  function likeClick() {
    if (disLikeButton === "inactive" && likeButton === "inactive") {
      setLikeButton("active");
    } else if (disLikeButton === "on" && likeButton === "inactive") {
      setLikeButton("active");
      setDisLikeButton("inactive");
    } else {
      setLikeButton("inactive");
    }
  }
  function disLikeClick() {
    if (likeButton === "inactive" && disLikeButton === "inactive") {
      setDisLikeButton("on");
    } else if (likeButton === "active" && disLikeButton === "inactive") {
      setDisLikeButton("on");
      setLikeButton("inactive");
    } else {
      setDisLikeButton("inactive");
    }
  }

  return (
    <div>
      <div>
        <button className={likeButton} onClick={likeClick}>
          LIKE
        </button>
      </div>
      <div>
        <button className={disLikeButton} onClick={disLikeClick}>
          DISLIKE
        </button>
      </div>
    </div>
  );
};

export default LikeButton;
