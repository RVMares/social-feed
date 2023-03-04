import React, { useState } from 'react';
import DisplayPosts from './DisplayPosts/DisplayPosts';
import PostTemplate from "./PostTemplate/PostTemplate";
import CreatePost from './CreatePost/CreatePost';

function App() {
  const [posts, setPosts] = useState([{userName: 'David Lagrange', postBody: '“Ned, I would love to stand here and talk with you—but I’m not going to.”', likeToggle: 'liked'}])

  function addNewPost(post){
      let tempPosts = [...posts, post];
      setPosts(tempPosts);
    }
     


  return (
    <div>
      <DisplayPosts parentPosts={addNewPost} />
      <CreatePost />
    </div>
  );
}

export default App;
