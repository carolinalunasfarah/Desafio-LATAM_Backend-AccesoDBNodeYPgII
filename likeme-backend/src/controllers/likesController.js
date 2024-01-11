import {
    getPosts,
    getPostsById,
    createPost,
    likedPost,
    updatePost,
    updatePostPatch,
    erasePost,
} from "../models/likeModel.js";

// GET ALL posts
export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

// GET post BY ID
export const getPostById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const post = await getPostsById(id);
        res.status(!post ? 404 : 200).json(
            !post ? { error: "Post not found" } : post
        );
    } catch (error) {
        next(error);
    }
};

// CREATE post
export const createPosts = async (req, res, next) => {
    try {
        const { title, imgsrc, description } = req.body;
        const newPost = await createPost(title, imgsrc, description);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
};

// UPDATE post BY likes
export const likedPosts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { likes } = req.body;
        const likePost = await likedPost(id, likes);
        res.status(200).json(likePost);
    } catch (error) {
        next(error);
    }
};

// UPDATE post
export const updatedPosts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, imgsrc, description } = req.body;
        const postUpdate = await updatePost(id, title, imgsrc, description);
        res.status(200).json(postUpdate);
    } catch (error) {
        next(error);
    }
};

// UPDATE post WITH PATCH
export const patchedPosts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, imgsrc, description } = req.body;
        const postPatch = await updatePostPatch(id, title, imgsrc, description);
        res.status(200).json(postPatch);
    } catch (error) {
        next(error);
    }
};

// DELETE post
export const erasePosts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const erasedPost = await erasePost(id);
        res.status(200).json(erasedPost);
    } catch (error) {
        next(error);
    }
};

// NOT FOUND PAGE
export const notFound = (req, res) => {
    res.status(404).json({ error: "Page not found" });
};
