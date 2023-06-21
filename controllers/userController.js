import User from "../models/user.js";

export const getAll = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

export const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select(["username", "email", "_id"]);
    if (!user) res.status(404).send("hamchin useri vojood nadare");
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async(req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
        username,
        email, 
        password
    })

    const newUser = await user.save()
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const updateById = async(req, res) => {
    const id = req.params.id
    const {username, email, password} = req.body

    const updatedUser = await User.findOneAndUpdate({_id: id}, {
        username, email
    }, {
        new: true
    })

    // const user = await User.findById(id)

    // user.username = username

    // await user.save()

    res.json(user)
}

export const deleteById = async(req, res) => {
    const id = req.params.id
    const user = await User.deleteOne({_id: id})
    return res.status(200).json(user)
}