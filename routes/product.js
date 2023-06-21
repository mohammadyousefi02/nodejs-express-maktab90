import { Router } from "express";
import { create, findAll } from "../controllers/productController.js";

const router = Router()

router.get("/", findAll)
router.post("/", create)

export default router