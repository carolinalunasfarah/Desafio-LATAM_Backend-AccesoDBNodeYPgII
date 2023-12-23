import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
    const [title, setTitle] = useState("");
    const [imgsrc, setImgsrc] = useState("");
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const { data: posts } = await axios.get(urlBaseServer + "/posts");
        setPosts([...posts]);
    };

    const addPost = async () => {
        const post = { title, imgsrc, description };
        await axios.post(urlBaseServer + "/posts", post);
        getPosts();
    };

    // este método se utilizará en el siguiente desafío
    const like = async (id) => {
        await axios.put(urlBaseServer + `/posts/like/${id}`);
        getPosts();
    };

    // este método se utilizará en el siguiente desafío
    const erasePost = async (id) => {
        await axios.delete(urlBaseServer + `/posts/${id}`);
        getPosts();
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="App">
            <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
            <div className="row m-auto px-5">
                <div className="col-12 col-sm-4">
                    <Form
                        setTitle={setTitle}
                        setImgsrc={setImgsrc}
                        setDescription={setDescription}
                        addPost={addPost}
                    />
                </div>
                <div className="col-12 col-sm-8 px-5 row posts align-items-start">
                    {posts.map((post, i) => (
                        <Post
                            key={i}
                            post={post}
                            like={like}
                            erasePost={erasePost}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
