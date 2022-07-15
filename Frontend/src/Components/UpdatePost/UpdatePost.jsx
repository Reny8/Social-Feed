import React, { useState } from "react";
import "./UpdatePost.css"
const UpdatePost = (props) => {
    const [modal, setModal] = useState("")
    const [overlay, setOverlay] = useState("")
    function showModal() {
        setModal("active");
        setOverlay("active");
      }
    
      function closeModal() {
        setModal("");
        setOverlay("");
      }
  return <div>
    <button className="edit-button" onClick={() => showModal()}><img src="https://img.icons8.com/sf-ultralight/50/000000/edit.png" alt="edit"/></button>
  </div>;
};

export default UpdatePost;
