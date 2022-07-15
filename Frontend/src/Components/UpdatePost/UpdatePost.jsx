import React, { useState } from "react";
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
  return <div></div>;
};

export default UpdatePost;
