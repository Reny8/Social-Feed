import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    getAllPosts()
  },[])
  async function getAllPosts() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/posts/')
      setPosts(response.data)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className = "page">
      <div>
        <header>
          <h1>Social<small className="text-muted">Feed</small></h1>
        </header>
      </div>
      <div>
        <CreatePost getAllPosts={getAllPosts} />
      </div>
      <div>
        <DisplayPost posts={posts} />
      </div>
    </div>
  );
}

export default App;
