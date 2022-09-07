import React, { useState } from "react";
import axios from "axios";
import "../../App.css"
const CreatePost = (props) => {
  const [newPost, setNewPost] = useState({
    date: new Date().toLocaleDateString(),
    name: "",
    comment: "",
  });
  async function addPost(body) {
    try {
      await axios.post("http://127.0.0.1:8000/posts/", body);
      setNewPost({...newPost, name: ""})
      setNewPost({...newPost, comment: ""})
      props.getAllPosts();
    } catch (error) {
      alert(error.message);
      console.log(body)
    }
  }
  return (
      <div className="border-box">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={newPost.name}
          onChange={(event) =>
            setNewPost({ ...newPost, name: event.target.value })
          }
        />
        <label>Post</label>
        <textarea
          type="text"
          className="form-control"
          value={newPost.comment}
          onChange={(event) =>
            setNewPost({ ...newPost, comment: event.target.value })
          }
        />
        <div>
          <button
            onClick={() => addPost(newPost)}
            className="create-button"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
  );
};

export default CreatePost;
