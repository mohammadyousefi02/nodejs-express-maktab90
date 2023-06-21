import { Router } from "express";
import { createUser, deleteById, findById, getAll, updateById } from "../controllers/userController.js";

const router = Router()

const users = [
    {
        id: 1,
        name: "mamad"
    },
    {
        id: 2,
        name: "asghar"
    },
    {
        id: 3,
        name: "jafar"
    },
]

router.get("/", getAll)


router.get("/:id", findById)

router.post("/", createUser)

router.put("/:id", updateById)

router.delete("/:id", deleteById)

export default router