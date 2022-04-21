import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
function App() {
  const [post, setPost] = useState([
    {
      date: "4/1/2022",
      name: "JJ Vega",
      comment:
        "It's April Fools Day! Give this a dislike if you really like it :)",
    },
    {
      date: "4/19/2022",
      name: "David L",
      comment: "I love playing guitar. Does anyone want to play with me?",
    },
  ]);

  function addPost(newPost) {
    let tempPost = [...post, newPost];
    setPost(tempPost);
  }

  return (
    <div className = "page">
      <div>
        <header>
          <h1>Social<small className="text-muted">Feed</small></h1>
        </header>
      </div>
      <div>
        <CreatePost addPost={addPost} />
      </div>
      <div>
        <DisplayPost postEntries={post} />
      </div>
    </div>
  );
}

export default App;
