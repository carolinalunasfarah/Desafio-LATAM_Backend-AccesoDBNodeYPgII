import { Router } from "express";
import {
    getAllPosts,
    getPostById,
    createPosts,
    likedPosts,
    updatedPosts,
    patchedPosts,
    erasePosts,
    notFound,
} from "../src/controllers/likesController.js";

const router = Router();

router
    .route("/posts")
    .get(getAllPosts)
    .post(createPosts)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

router
    .route("/posts/:id")
    .get(getPostById)
    .put(updatedPosts)
    .patch(patchedPosts)
    .delete(erasePosts)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

router
    .route("/posts/like/:id")
    .put(likedPosts)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

// NOT FOUND
router.use("*", notFound);

export default router;
