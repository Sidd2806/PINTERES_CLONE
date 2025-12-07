import express from "express";
import { getUser } from "../contollers/user.controller.js";

const router = express.Router();
router.get("/:username", getUser);

export default router;
