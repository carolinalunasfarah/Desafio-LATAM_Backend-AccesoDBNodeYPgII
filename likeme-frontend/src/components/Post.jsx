import TrashIcon from "./icons/TrashIcon";
import HeartIcon from "./icons/heart-solid";

function Post({ post, likePost, erasePost }) {
    return (
        <div className="card col-12 col-sm-4 d-inline mx-3">
            <div className="card-body p-0 mb-3">
                <img src={post.imgsrc} alt="" className="card-img-top" />
                <div className="p-3">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
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
            </div>
        </div>
    );
}

export default Post;
