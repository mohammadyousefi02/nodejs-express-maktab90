import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    title: String,
    price: Number,
    stock: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})


export default model("Product", ProductSchema)