import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Navbar from './Navbar/Navbar';
import PostTemplate from './PostTemplate/PostTemplate';
import './App.css'

function App() {
  const [posts, setPosts] = useState([{userName: 'David Lagrange', postBody: '“Ned, I would love to stand here and talk with you—but I’m not going to.” -Phil Connors (Bill Murray), Groundhog Day', likeToggle: ''}, {userName: 'Ruth Mares', postBody:'“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney', likeToggle:''}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

     
  return (
    <div className='container'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='col-md-6'>
        <div className='border-box'>
          <CreatePost createNewPost={addNewPost}/>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='border-box'>
          <DisplayPosts parentPosts={posts}/>
          <PostTemplate parentPosts={posts}/>
        </div>
      </div>
    </div>
  );
}

export default App;
