import {
    getPosts,
    getPostsById,
    createPost,
    likedPost,
    erasePost,
} from "../models/likeModel.js";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getLikeMeConnection = async (req, res) => {
    try {
        res.sendFile(__dirname + "./index.html");
        res.status(200);
    } catch (error) {
        throw new Error("Error getting all posts: " + error.message);
    }
};

// GET ALL posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET post BY ID
export const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await getPostsById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE post
export const createPosts = async (req, res) => {
    try {
        const { title, imgsrc, description } = req.body;
        const newPost = await createPost(title, imgsrc, description);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE post
export const likedPosts = async (req, res) => {
    try {
        const { id } = req.params;
        const { likes } = req.body;
        const likePost = await likedPost(id, likes);
        res.status(200).json(likePost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE post
export const erasePosts = async (req, res) => {
    try {
        const { id } = req.params;
        const erasedPost = await erasePost(id);
        res.status(200).json(erasedPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// NOT FOUND PAGE
export const notFound = (req, res) => {
    res.status(404).json({ error: "Page not found" });
};
