import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {
    const [likeButtonClass, setLikeButtonClass] = useState(false);
    const [dislikeButtonClass, setDislikeButtonClass] = useState(false);

    const handleLikeClick = () => {
        if(likeButtonClass === false){
            setLikeButtonClass(true);
            setDislikeButtonClass(false);
        }else{
            setLikeButtonClass(false);
        }
    };
    const handleDislikeClick = () => {
        if(dislikeButtonClass === false){
            setDislikeButtonClass(true);
            setLikeButtonClass(false);
        }else{
            (setDislikeButtonClass(false));
        }
    };
    
    return ( 
        <div>
            <div className='row'>
                {props.post.userName}
            </div>
            <div className='row1'>
                <div className='col'>
                    {props.post.postBody}
                </div>
                <div className='btn-group' role='group' aria-label="Like buttons">
                    <button 
                        type='likeButton'  
                        className={`likeButtonClass ${!likeButtonClass ? "" : "false"}`} 
                        onClick={(event) => handleLikeClick(event)} 
                        disabled={likeButtonClass}>
                        <i className="fas fa-thumbs-up">LIKE</i>
                    </button>
                    <button 
                        type='dislikeButton' 
                        className={`dislikeButtonClass ${!dislikeButtonClass ? "" : "false"}`} 
                        onClick={(event) => handleDislikeClick(event)}
                        disabled={dislikeButtonClass}>
                        <i className="fas fa-thumbs-down">DISLIKE</i>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Post;