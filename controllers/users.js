import { v4 as uuidv4 } from "uuid";
import User from "../models/user.js";

export const createUser = async (req, res) => {
  const user = req.body;

  // Assign UUID as _id
  const newUser = new User({ ...user, _id: uuidv4() });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// GET all users
export const getUser = async (req, res) => {
  try {
    const users = await User.find(); // fetch all users
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



// GET user by UUID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id); // works with UUID now
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// DELETE user by UUID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.json({ message: `User with id ${id} deleted successfully` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE user by UUID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, age, email },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
