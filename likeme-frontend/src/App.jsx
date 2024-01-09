import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const { data: posts } = await axios.get(urlBaseServer + "/posts");
        setPosts([...posts]);
    };

    const addPost = async (post) => {
        await axios.post(urlBaseServer + "/posts", post);
        getPosts();
    };

    const likePost = async (id) => {
        await axios.put(urlBaseServer + `/posts/like/${id}`);
        getPosts();
    };

    const erasePost = async (id) => {
        await axios.delete(urlBaseServer + `/posts/${id}`);
        getPosts();
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">&#128248; Like Me &#128248;</h2>
            <main className="row">
                <section className="col-12 col-md-4 mt-5">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h2>Add Post</h2>
                            <Form addPost={addPost} />
                        </div>
                    </div>
                </section>
                <section className="col-12 col-md-4 mt-5">
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                likePost={likePost}
                                erasePost={erasePost}
                            />
                        );
                    })}

                    {posts.length === 0 && (
                        <div className="card">
                            <div className="card-body">
                                <h4>There's no posts yet</h4>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
