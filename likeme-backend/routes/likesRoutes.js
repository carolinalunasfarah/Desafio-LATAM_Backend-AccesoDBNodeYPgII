import { Router } from "express";
import {
    getAllPosts,
    getPostById,
    createPosts,
    likedPosts,
    erasePosts,
    getLikeMeConnection,
    notFound,
} from "../src/controllers/likesController.js";

const router = Router();

// GET CONNECT FRONTEND
router.get("/", getLikeMeConnection);

// GET ALL REGISTERS IN TABLE posts
router.get("/posts", getAllPosts);

// GET post BY ID
router.get("/posts/:id", getPostById);

// POST A NEW post
router.post("/posts", createPosts);

// PUT post BY ID
router.put("/posts/like/:id", likedPosts);

// DELETE post
router.delete("/posts/:id", erasePosts);

// NOT FOUND
router.all("*", notFound);

export default router;
