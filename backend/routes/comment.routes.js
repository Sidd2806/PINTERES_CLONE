import express from "express"
const router=express.Router()
import {getPostComments,addComment} from "../contollers/comment.controller.js"
import { verifyToken } from "../middlewares/verifyToken.js"

router.get("/:postId",getPostComments)
router.post("/", verifyToken, addComment)


export default router;