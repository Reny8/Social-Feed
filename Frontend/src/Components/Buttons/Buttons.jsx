import "./Buttons.css";
import React, { useState } from "react";
import UpdatePost from "../UpdatePost/UpdatePost";
const Buttons = (props) => {
  const [likeButton, setLikeButton] = useState("inactive");
  const [disLikeButton, setDisLikeButton] = useState("inactive");
  const [likeActive, setLikeActive] = useState("FFFFFF")
  const [dislikeActive, setDislikeActive] = useState("FFFFFF")
  function likeClick() {
    if (disLikeButton === "inactive" && likeButton === "inactive") {
      setLikeButton("active");
      setLikeActive("125A15")
    } else if (disLikeButton === "on" && likeButton === "inactive") {
      setLikeButton("active");
      setLikeActive("125A15")
      setDisLikeButton("inactive");
      setDislikeActive("FFFFFF")
    } else {
      setLikeButton("inactive");
      setLikeActive("FFFFFF")
    }
  }
  function disLikeClick() {
    if (likeButton === "inactive" && disLikeButton === "inactive") {
      setDisLikeButton("on");
      setDislikeActive("A00505")
    } else if (likeButton === "active" && disLikeButton === "inactive") {
      setDisLikeButton("on");
      setDislikeActive("A00505")
      setLikeButton("inactive");
      setLikeActive("FFFFFF")
    } else {
      setDisLikeButton("inactive");
      setDislikeActive("FFFFFF")
    }
  }

  return (
    <div className="post-buttons">
      <div>
        <button className={likeButton} onClick={likeClick}>
          <img src={`https://img.icons8.com/ios-filled/30/${likeActive}/thumb-up--v1.png`} alt="like"/>
        </button>
      </div>
      <div>
        <button className={disLikeButton} onClick={disLikeClick}>
          <img src={`https://img.icons8.com/ios-filled/30/${dislikeActive}/thumbs-down.png`} alt="dislike"/>
        </button>
      </div>
      <div>
        <UpdatePost getAllPosts={props.getAllPosts} post={props.post} />
      </div>
    </div>
  );
};

export default Buttons;
