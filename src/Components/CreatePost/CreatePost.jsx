import React, { useState } from "react";

const CreatePost = (props) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [name, setName] = useState(" ");
  const [comment, setComment] = useState(" ");

  function handlesSubmit(event) {
    event.preventDefault();
    let newPost = {
      date: date,
      name: name,
      comment: comment,
    };
    props.addPost(newPost);
  }
  return (
    <form onSubmit={handlesSubmit}>
      <div className="border-box">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Post</label>
        <textarea
          type="text"
          className="form-control"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <div>
          <button className="create-button"type="submit">Create</button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
