import React, { useState } from "react";

const CreatePost = (props) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState(" ");
  const [comment, setComment] = useState(" ");

function handlesSubmit(event) {
  event.preventDefault()
  let newPost = {
    date: date,
    name: name,
    comment: comment,
  }
  console.log(newPost)
  props.addPost(newPost)
}
  return (
    <form onSubmit = {handlesSubmit}>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange = {(event) => setDate(event.target.value)}/>
      </div>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange = {(event) => setName(event.target.value)}/>
      </div>
      <div>
        <label>Post</label>
        <textarea type="text" value={comment} onChange = {(event) => setComment(event.target.value)}/>
      </div>
      <button type='submit'>Submit Post</button>
    </form>
  );
};

export default CreatePost;
