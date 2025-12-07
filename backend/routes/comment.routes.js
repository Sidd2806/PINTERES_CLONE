import express from "express"
const router=express.Router()
import {test} from "../contollers/comment.controller.js"

router.get("/test",test)

export default router;