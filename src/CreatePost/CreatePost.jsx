import React, { useState } from 'react';

const CreatePost = (props) => {

    const[userName, setName] = useState('');
    const[postBody, setPostBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            userName: userName,
            postBody: postBody
        };
        console.log(newPost);
        props.createNewPost(newPost);
    }

    return (
        <form onSubmit={handleSubmit} className ='form-grid'>
            <div className= 'form-group'>
                <label>Name
                <input type= 'text' className = 'form-control'  value={userName} onChange={(event) =>
                 setName(event.target.value)} />
                </label>
            </div>
            <div className= 'form-group'>
                <label>Post</label>
                <input type= 'text' className= 'form-control' value={postBody} onChange={(event) =>
                setPostBody(event.target.value)}/>
            </div>
            <button type="submit" className='btn btn-primary'>Create Post</button>
        </form>
    );
}

export default CreatePost;