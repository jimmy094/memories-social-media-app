import express from'express';
import { getPosts, createPosts, updatePost } from '../controllers/posts.js';

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/:id', updatePost)

export default router;

//routes file is where requests are received and then directed to the controller functions for instructions and then information gets sent back. create routes for get/post/delete/put.

//import the controllers above from "post" controller file