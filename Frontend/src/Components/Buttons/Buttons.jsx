import "./Buttons.css";
import React, { useState } from "react";
import UpdatePost from "../UpdatePost/UpdatePost";
const Buttons = (props) => {
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
    <div className="post-buttons">
      <div>
        <button className={likeButton} onClick={likeClick}>
          <img src="https://img.icons8.com/ios-filled/30/FFFFFF/thumb-up--v1.png" alt="like"/>
        </button>
      </div>
      <div>
        <button className={disLikeButton} onClick={disLikeClick}>
          <img src="https://img.icons8.com/ios-filled/30/FFFFFF/thumbs-down.png" alt="dislike"/>
        </button>
      </div>
      <div>
        <UpdatePost getAllPosts={props.getAllPosts} post={props.post} />
      </div>
    </div>
  );
};

export default Buttons;
