import TrashIcon from "./icons/TrashIcon";
import HeartIcon from "./icons/heart-solid";

function Post({ post, likePost, erasePost }) {
    return (
        <article className="card mb-4">
            <img src={post.imgsrc} alt="" className="card-img-top" />
            <div className="card-body">
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                        <HeartIcon
                            fill="red"
                            height="20"
                            onClick={() => {
                                likePost(post.id);
                            }}
                            className="cursor-pointer"
                        />
                        <span className="ms-2">{post.likes}</span>
                    </div>
                    <div>
                        <TrashIcon
                            fill="blue"
                            height="20"
                            onClick={() => {
                                erasePost(post.id);
                            }}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Post;
