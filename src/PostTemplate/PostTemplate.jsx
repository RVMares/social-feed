const PostTemplate = (props) => {
    return(
        <table className='table'>
            <thead>
                <td>{post.name}</td>
            </thead>
            <tbody>
                {props.parentEntries.map((post) => {
                    return (
                        <tr>
                            <td>{post.post}</td>
                            <td>{post.likeToggle}</td>
                        </tr>

                    );
                })}
            </tbody>
        </table>
    );
}

export default PostTemplate;