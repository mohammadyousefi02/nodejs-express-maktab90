import { Router } from "express";

import usersRouter from "./users.js"
import categoryRouter from "./category.js"
import productRouter from "./product.js"
import authRouter from "./auth.js"

const router = Router()


router.use('/users', usersRouter)
router.use("/categories", categoryRouter)
router.use("/products", productRouter)
router.use("/auth", authRouter)

export default router