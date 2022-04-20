import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import LikeButton from "./Components/Buttons/Buttons";

function App() {
  const [post, setPost] = useState([
    {
      date: "2022-04-01",
      name: "JJ Vega",
      comment:
        "It's April Fools Day! Give this a dislike if you really like it :)",
    },
    {
      date: "2022-04-19",
      name: "David L",
      comment: "I love playing guitar. Does anyone want to play with me?",
    },
  ]);

  function addPost(newPost) {
    let tempPost = [...post, newPost];
    setPost(tempPost);
  }

  return (
    <div>
      <div>
        <header>
          <h1>SocialFeed</h1>
        </header>
      </div>
      <div className="border-box">
        <CreatePost addPost={addPost} />
      </div>
      <div className="border-box">
        <DisplayPost postEntries={post} />
      </div>
      <LikeButton />
    </div>
  );
}

export default App;
