import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email zaroorie"],
    trim: true,
    unique: true,
  },
  role: {
    type: String,
    default: "USER",
    enum: {
        values: ["ADMIN", "USER"]
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hash(this.password, 10);
  next();
});

userSchema.methods.compare = async function (password) {
  return await compare(password, this.password);
};

userSchema.methods.generateToken = async function() {
    return jwt.sign({id: this._id}, "thisisoursecretkey")
}

export default model("User", userSchema);
