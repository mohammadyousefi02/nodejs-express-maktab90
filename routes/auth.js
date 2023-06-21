import { login, refreshToken, signup } from "../controllers/authController.js";

import { Router } from "express";

const router = Router()

router.post("/login", login)
router.post("/signup", signup)
router.post("/refreshToken", refreshToken)

export default router