import React, { useState } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost";

function App() {
  const [post, setPost] = useState([
    {
      date: "04.01.2022",
      name: "JJ Vega",
      post: "It's April Fools Day! Give this a dislike if you really like it :)",
    },
    {
      date: "4.19.2022",
      name: "David Lagrange",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
  ]);
  return (
    <div>
      <header>
        <h1>SocialFeed</h1>
      </header>
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
