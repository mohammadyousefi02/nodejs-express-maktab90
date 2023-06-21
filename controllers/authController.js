import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ error: "email ya password eshtebah ast" });
  const validate = await user.compare(password);
  if (!validate)
    return res.status(404).json({ error: "email ya password eshtebah ast" });
  const token = await user.generateToken();
  res.json({ token });
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const existedUser = await User.findOne({ email });
  if (existedUser)
    return res
      .status(403)
      .json({ error: "hamchin useri ba in email vojood darad" });
  const user = await User.create({
    username,
    email,
    password,
  });
  const token = await user.generateToken();
  res.status(201).json({ token });
};


export const refreshToken = async (req, res) => {
    const token = req.headers.authorization
    let payload;
    try {
        payload = jwt.verify(token.substring(7), "thisisoursecretkey")
    } catch (error) {
        return res.status(401).send("boro biroon")
    }
    const user = await User.findById(payload.id)
    if(user.role !== "ADMIN") return res.status(401).send("to ham boro biroon")
    const newToken = await user.generateToken()
    // res.json({token: newToken})
    res.json({message: "to oki"})
}