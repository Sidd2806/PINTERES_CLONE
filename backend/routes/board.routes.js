import express from "express"
const router=express.Router()
import {getUserBoards} from "../contollers/board.controller.js"

router.get("/:userId",getUserBoards)

export default router;