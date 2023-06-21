import Category from "../models/category.js"

export const createCategory = async(req, res) => {
    const {title} = req.body

    const category = await Category.create({
        title
    }) 

    return res.status(201).json(category)
}