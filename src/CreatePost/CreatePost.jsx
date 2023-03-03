import React, { useState } from 'react';

const CreatePost = (props) => {

    const[name, setName] = useSate('');
    const[postBody, setPostBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            postBody: postBody
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleSubmit} className ='form-grid'>
            <div className= 'form-group'>
                <label>Name</label>
                <input className = "fullName"/>
            </div>
            <div className= 'form-group'>
                <label>Post</label>
                <input className= "postBody"/>
            </div>
            <button type="submit" className='btn btn-primary'>Create Post</button>
        </form>
    );
}

export default CreatePost;