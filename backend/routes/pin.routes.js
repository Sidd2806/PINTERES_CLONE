import express from "express"
const router=express.Router()
import {getPins,getPin} from "../contollers/pin.controller.js"

router.get("/",getPins)
router.get("/:id",getPin)

export default router;