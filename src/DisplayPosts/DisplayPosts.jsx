import React from 'react';
import PostTemplate from '../PostTemplate/PostTemplate';

const DisplayPosts = (props) => {
    
    return(
        <table className='table'>
            <thead>
                <tr>
                    Your SocialFeed!
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((post) => {
                    return (
                        <tr>
                            <PostTemplate parentPosts={post}/>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default DisplayPosts;