import React, { useState } from 'react';
import CreatePost from './CreatePost/CreatePost';
import DisplayPosts from './DisplayPosts/DisplayPosts';
import Navbar from './Navbar/Navbar';
import PostTemplate from './PostTemplate/PostTemplate';

function App() {
  const [posts, setPosts] = useState([{userName: 'David Lagrange', postBody: '“Ned, I would love to stand here and talk with you—but I’m not going to.”', likeToggle: 'liked'}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

     
  return (
    <div class='container-fluid'>
      
      <Navbar />
      <CreatePost createNewPost={addNewPost}/>
      <DisplayPosts parentPosts={posts}/>
      <PostTemplate parentPosts={posts}/>

    </div>
  );
}

export default App;
