import express from "express"
const router=express.Router()
import {getPostComments} from "../contollers/comment.controller.js"

router.get("/:postId",getPostComments)

export default router;