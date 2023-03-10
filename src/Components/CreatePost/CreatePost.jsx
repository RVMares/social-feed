import React, { useState } from 'react';
import "./CreatePost.css"

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
                <div className="row">
                    <div className='column-1'>
                        <label>Name</label>
                    </div>
                    <div className='column-2'>
                        <input type= 'text' className = 'form-control'  value={userName} onChange={(event) =>
                            setName(event.target.value)} />
                    </div>
                </div>
            </div>
            <div className= 'form-group'>
                <div className="row">
                    <div className='column-1'>
                        <label>Post</label>
                    </div>
                    <div className='column-2'>
                        <textarea type= 'text' className= 'form-control' value={postBody} onChange={(event) =>
                        setPostBody(event.target.value)}/>
                    </div>
                    <div className='column-2'>
                        <button type="submit" className='btn btn-primary'>Create</button>
                    </div>
                </div>            
            </div>
        </form>
    );
}

export default CreatePost;