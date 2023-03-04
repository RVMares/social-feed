import React, { useState } from 'react';
import CreatePost from './CreatePost/CreatePost';
import DisplayPosts from './DisplayPosts/DisplayPosts';
import NavBar from './NavBar/NavBar';

function App() {
  const [posts, setPosts] = useState([{userName: 'David Lagrange', postBody: '“Ned, I would love to stand here and talk with you—but I’m not going to.”', likeToggle: 'liked'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

     
  return (
    <div class='container-fluid'>
      
      <NavBar />
      <CreatePost />
      <DisplayPosts parentPosts={addNewPost}/>
    </div>
  );
}

export default App;
