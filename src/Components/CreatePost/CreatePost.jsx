import React, { useState } from "react";

const CreatePost = (props) => {
  const [date, setDate] = useState("");
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
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post</label>
        <textarea
          type="text"
          className="form-control"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <div className = 'd-grid gap-2'>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default CreatePost;
