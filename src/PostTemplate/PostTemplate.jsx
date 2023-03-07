import React, { useState } from 'react';


const PostTemplate = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");
    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }else{
            setButtonClass("inactive");
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
                                        <button type='button' className={buttonClass} onClick={handleClick}>{props.likeToggle}</button>
                                        <button type='button' className={buttonClass} onClick={handleClick}>{props.likeToggle}</button>
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