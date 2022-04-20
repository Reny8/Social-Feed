import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost"
import CreatePost from "./Components/CreatePost/CreatePost";


function App() {
  const [post, setPost] = useState([
    {
      date: "2022-04-01",
      name: "JJ Vega",
      comment: "It's April Fools Day! Give this a dislike if you really like it :)",
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
      <header>
        <h1>SocialFeed</h1>
      </header>
      <div>
        <CreatePost addPost = {addPost}/>
      </div>
      <div>
        <DisplayPost postEntries={post} />
      </div>
    </div>
  );
}

export default App;
// Create a FORM COMPONENT that can add a new post to the main feed
// Create a Post component
// Create Display Post component
