import React from 'react';

const DisplayPosts = (props) => {
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Your SocialFeed!</th>
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((post) => {
                    return (
                        <tr>
                            <td>{post.userName}</td>
                            <td>{post.postBody}</td>
                            <td>{post.likeToggle}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default DisplayPosts;