import React, { useState } from "react";

const CreatePost = (props) => {
  const [date] = useState(new Date().toLocaleDateString());
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
        <label for="name">Name</label>
        <input 
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label for="post">Post</label>
        <textarea
          type="text"
          className="form-control"
          name="post"
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
