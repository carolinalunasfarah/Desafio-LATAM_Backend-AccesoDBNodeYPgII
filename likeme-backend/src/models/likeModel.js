import { pool } from "../../database/connectionDB.js";

// GET posts
export const getPosts = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error getting all posts: " + error.message);
    }
};

// GET post BY ID
export const getPostsById = async (id) => {
    const SQLquery = {
        text: "SELECT * FROM posts WHERE id = $1",
        values: [id],
    };
    try {
        const response = await pool.query(SQLquery);
        if (response.rowCount === 0) {
            throw new Error("Post not found");
        }
        return response.rows;
    } catch (error) {
        throw new Error("Error getting a post by this id: " + error.message);
    }
};

// CREATE post
export const createPost = async (title, imgsrc, description, likes = 0) => {
    const SQLquery = {
        text: "INSERT INTO posts (title, imgsrc, description, likes) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [title, imgsrc, description, likes],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows[0];
    } catch (error) {
        throw new Error("Error creating post: " + error.message);
    }
};

// UPDATE post BY likes
export const likedPost = async (id) => {
    const SQLquery = {
        text: "UPDATE posts SET likes = (likes+1) WHERE id = $1",
        values: [id],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error updating post: " + error.message);
    }
};

// UPDATE post BY title, imgsrc, description
export const updatePost = async (id, title, imgsrc, description) => {
    const SQLquery = {
        text: "UPDATE posts SET title = $1, imgsrc = $2, description = $3 WHERE id = $4 RETURNING *",
        values: [title, imgsrc, description, id],
    };
    try {
        const response = await pool.query(SQLquery);
        if (response.rowCount === 0) {
            throw new Error("Post not found");
        }
        return response.rows;
    } catch (error) {
        throw new Error("Error updating this post: " + error.message);
    }
};

// UPDATE post BY title, imgsrc, description USING PATCH
export const updatePostPatch = async (id, title, imgsrc, description) => {
    const SQLquery = {
        text: "UPDATE posts SET title = COALESCE($1, title), imgsrc = COALESCE($2, imgsrc), description = COALESCE($3, description) WHERE id = $4 RETURNING *",
        values: [title, imgsrc, description, id],
    };
    try {
        const response = await pool.query(SQLquery);
        if (response.rowCount === 0) {
            throw new Error("Post not found");
        }
        return response.rows;
    } catch (error) {
        throw new Error(
            "Error updating title, imgsrc or description of this post: " +
                error.message
        );
    }
};

// DELETE post BY id
export const erasePost = async (id) => {
    const SQLquery = {
        text: "DELETE FROM posts WHERE id = $1",
        values: [id],
    };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error deleting post: " + error.message);
    }
};
