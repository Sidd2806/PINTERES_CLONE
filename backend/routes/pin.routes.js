import express from "express"
const router=express.Router()
import {getPins,getPin,createPin,interactionCheck} from "../contollers/pin.controller.js"
import { verifyToken } from "../middlewares/verifyToken.js"

router.get("/",getPins)
router.get("/:id",getPin)
router.post("/",verifyToken,createPin)
router.post("/interaction-check/:id",interactionCheck)

export default router;