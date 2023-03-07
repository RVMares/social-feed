import React, { useState } from 'react';
import './PostTemplateButton.css';
import LikeButton from './images/like.png';
import DislikeButton from './images/dislike.png';

const PostTemplate = (props) => {

    const [likeButtonClass, setlikeButtonClass] = useState("inactive");
    const [dislikeButtonClass, setdislikeButtonClass] = useState("inactive");
    function handleLikeClick(){
        if(likeButtonClass === "inactive"){
            setlikeButtonClass("active");
            setdislikeButtonClass("inactive");
        }else{
            setlikeButtonClass("inactive");
        }
    }
    function handleDislikeClick(){
        if(dislikeButtonClass === "inactive"){
            setdislikeButtonClass("active");
            setlikeButtonClass("inactive");
        }else{
            (setdislikeButtonClass("inactive"));
        }
    }

    return(
        <div className='container'>
            <div className='table'>
                {props.parentPosts.map((post, index) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <tr>
                                    <td>{post.userName}</td>
                                </tr>
                                <tr>
                                    <td>{post.postBody}</td>
                                </tr>
                                <tr>
                                    <div class='btn-group' role='group' aria-label="Like toggle">
                                        <button type='button' className={likeButtonClass} onClick={handleLikeClick}>
                                            <img src={LikeButton} className="img-fluid" alt='Blue thumbs up' />
                                        </button>
                                        <button type='button' className={dislikeButtonClass} onClick={handleDislikeClick}>
                                            <img src={DislikeButton} className="img-fluid" alt='Red thumbs down' />
                                        </button>
                                    </div>
                                </tr>
                            </tr>
                        </tbody>
                    );
                })}
            </div>
        </div>
    );
}

export default PostTemplate;