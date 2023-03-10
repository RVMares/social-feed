import React, { useState } from 'react';
import './PostTemplateButton.css';


const PostTemplate = (props) => {

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

    return(
        <div className='container-fluid'>
            {props.parentPosts.map((post, index) => {
                return(
                    <div key={index}>
                        <div style={{'color':'white'}}>{index+1}</div>
                        <div className='row'>
                            {post.userName}
                        </div>
                        <div className='row1'>
                            <div className='col'>
                                {post.postBody}
                            </div>
                            <div className='btn-group' role='group' aria-label="Like buttons">
                                <button 
                                    type='likeButton'  
                                    className={likeButtonClass} 
                                    onClick={() => handleLikeClick} 
                                    disabled={likeButtonClass}>
                                    <i className="fas fa-thumbs-up">LIKE</i>
                                </button>
                                <button 
                                    type='dislikeButton' 
                                    className={dislikeButtonClass} 
                                    onClick={() => handleDislikeClick}
                                    disabled={dislikeButtonClass}>
                                    <i className="fas fa-thumbs-down">DISLIKE</i>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default PostTemplate;