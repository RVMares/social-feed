import PostTemplate from "../PostTemplate/PostTemplate";


const DisplayPosts = (props) => {
    return(
        <table className='table'>
            <tbody>
                {props.parentEntries.map((post) => {
                    return (
                        <tr>
                            <td>{post.post}</td>
                        </tr>

                    );
                })}
            </tbody>
        </table>
    );
}

export default DisplayPosts;