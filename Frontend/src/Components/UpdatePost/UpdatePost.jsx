import React, { useState } from "react";
import axios from "axios";
import "./UpdatePost.css";
const UpdatePost = (props) => {
  const [modal, setModal] = useState("");
  const [overlay, setOverlay] = useState("overlay");
  const [item, setItem] = useState({
    date: props.post.date,
    name: props.post.name,
    comment: props.post.comment,
  });
  function showModal() {
    setModal("active");
    setOverlay("overlay-active");
  }

  function closeModal() {
    setModal("");
    setOverlay("overlay");
  }
  async function saveChanges(body, id) { 
    try {
      await axios.put(`http://127.0.0.1:8000/posts/${id}/`, body);
      closeModal();
      props.getAllPosts();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <button className="edit-button" onClick={() => showModal()}>
      <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/edit--v1.png" alt="edit"/>
      </button>
      <div className={modal} id="edit-modal">
        <div className="modal-header">
          <h1>EDIT POST</h1>
          <button onClick={() => closeModal()} className="close-modal">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />

          <label>Comment</label>
          <input
            type="text"
            className="form-control"
            value={item.comment}
            onChange={(e) => setItem({ ...item, comment: e.target.value })}
          />

          <button
            onClick={() => saveChanges(item, props.post.id)}
            className="create-button"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
      <div className={overlay}></div>
    </div>
  );
};

export default UpdatePost;
