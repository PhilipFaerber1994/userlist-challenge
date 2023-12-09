import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../../userSchema";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await User.find();
    res.status(200).send(allUser);
  } catch (error) {
    throw error;
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send("User successfully created");
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId; // Adjust the property name based on your route configuration
    await User.deleteOne({ _id: userId });

    res.status(200).send("User successfully deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = req.body;
    const result = await User.findOneAndUpdate({ _id: userId }, user, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    throw error;
  }
};

export default { getAllUser, createUser, deleteUser, updateUser };
