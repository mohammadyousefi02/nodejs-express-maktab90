import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test-node")
        console.log("successfully connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}