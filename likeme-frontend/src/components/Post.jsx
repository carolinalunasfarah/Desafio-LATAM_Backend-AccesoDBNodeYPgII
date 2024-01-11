import TrashIcon from "./icons/TrashIcon";
import HeartIcon from "./icons/heart-solid";

function Post({ post, likePost, erasePost }) {
    return (
        <div className="card postCard col-12 col-sm-4 d-inline mx-2 p-0">
            <article>
                <img
                    src={post.imgsrc}
                    alt={post.description}
                    className="card-img-top"
                />
                <section className="pt-2">
                    <h5>{post.title}</h5>
                    <p>{post.description}</p>
                    <section className="d-flex m-3 justify-content-between align-items-center">
                        <article className="heartIcon">
                            <HeartIcon
                                fill="red"
                                height="20"
                                onClick={() => {
                                    likePost(post.id);
                                }}
                                className="cursor-pointer"
                            />
                            <span className="ms-2">{post.likes}</span>
                        </article>
                        <article>
                            <TrashIcon
                                fill="blue"
                                height="20"
                                onClick={() => {
                                    erasePost(post.id);
                                }}
                                className="cursor-pointer trashIcon"
                            />
                        </article>
                    </section>
                </section>
            </article>
        </div>
    );
}

export default Post;
