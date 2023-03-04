const PostTemplate = (props) => {
    return(
        <div className='container'>
            <div className='table'>
                {props.parentPosts.map((post) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{post.userName}</td>
                            </tr>
                            <tr>
                                <td>{post.postBody}</td>
                            </tr>
                            <tr>
                                <td>{post.likeToggle}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </div>
        </div>
    );
}

export default PostTemplate;