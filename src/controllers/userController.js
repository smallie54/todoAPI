import { User } from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const newUser = async (req, res) => {
  try {
    const { name, email, password, age, gender } = await req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const altuser = await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
    });
    return res.status(201).json(altuser);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const listUser = async (req, res) => {
  try {
    const getUser = await User.find();
    return res.status(200).json(getUser);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = await req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = await req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(201).json({ message: "user successfully deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, age, gender } = await req.body;
    const { id } = await req.params;
    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        age,
        gender,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "invalid credentials" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(404).json({ message: "invalid credentials" });
    }
 const token = jwt.sign({
      email: user.email,
      id: String(user._id)
    },
    process.env.JWT_KEY, {expiresIn: '1hr'}
  )
    return res.status(200).json({data : user, token: token})
  } catch (error) {res.status(404).json({message : error.message || "invalid"})}
};
