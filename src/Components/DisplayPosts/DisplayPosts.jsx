import Post from '../Components/Post/Post';

const DisplayPosts = (props) => {

    return(
        <div className='container-fluid'>
            <div className="row no-gutters">
                Your SocialFeed!
            </div>
            <div className="row no-gutters">
                {props.parentPosts.map((post, index) => {
                    return (
                        <div key={index}>
                            <div>{post.parentPosts}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DisplayPosts;