import { Request, Response } from "express";
import User from "../model/user";

const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id, email} = req.body;

    // Validate request body
    if (!auth0Id || !email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }
    // Check if user already exists
    const userAuth0Id = await User.findOne({ auth0Id });
    const userEmail = await User.findOne({ email });

    if (userAuth0Id && userEmail) {
      res.status(409).json({ message: "User already exists" });
      return;
    }
    else if (userAuth0Id){
      res.status(409).json({ message: "User with this Auth0 ID already exists" });
      return;
    }
    else if (userEmail){
      res.status(409).json({ message: "User with this email already exists" });
      return;
    }

    // Create and save new user 
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully", user: newUser });

  } catch (error) {
    console.error("Error creating user:", error);
    const errorMessage = process.env.NODE_ENV === "development" ? (error as Error).message : "Error creating user";
    res.status(500).json({ message: errorMessage });
  }
};

// Get users from database

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Update user by ID

const updateUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(auth0Id, req.body, { new: true });
    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return 
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

// get user by id

const getUserById = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.params;
    const user = await User.findById(auth0Id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return 
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Error fetching user" });
  }
};

// Delete user by id

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.params;
    const deletedUser = await User.findByIdAndDelete(auth0Id);
    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
      return 
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

export default {createUser, getUsers, updateUser, getUserById, deleteUser};