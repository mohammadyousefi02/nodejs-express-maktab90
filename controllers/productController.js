import Product from "../models/product.js";

export const findAll = async(req, res) => {
    // const products = await Product.find().populate("category", ["title"]).select(["title"])
    const products = await Product.find().populate("category", ["title"])
    res.json(products)
};

export const create = async (req, res) => {
  const { title, price, stock, category } = req.body;

  const product = await Product.create({
    title,
    price,
    stock,
    category,
  });

  return res.status(201).json(product);
};
