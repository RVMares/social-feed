import Post from "../Post/Post";

const DisplayPosts = (props) => {

    return(
        <div className='container-fluid'>
            <div className="row no-gutters">
                Your SocialFeed!
            </div>
            <div className="row no-gutters">
                {props.parentPosts.map((post) => {
                    return (
                        <Post post={post} />
                    );
                })}
            </div>
        </div>
    );
}

export default DisplayPosts;