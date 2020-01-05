import React, { useState, useEffect } from 'react';
import './App.css';
import * as PostsAPI from './PostAPI'
import ListCards from './ListCards';


function App() {

  const [posts, setPosts] = useState()

  useEffect(() => {
    PostsAPI.getPosts().then((post)=>{
      setPosts(post)
    })
  },[]);


  return (
    <div className="App">
      <h1 align="center">Posts by Cards</h1>
      <ListCards post = {posts ? posts : []}/>      
    </div>
  );
}

export default App;
