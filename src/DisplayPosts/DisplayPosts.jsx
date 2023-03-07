
const DisplayPosts = (props) => {
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Your SocialFeed!</th>
                </tr>
            </thead>
            <tbody>
                {props.parentPosts.map((post, index) => {
                    return (
                        <tr key={index}>
                            <td>{post.parentPosts}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default DisplayPosts;