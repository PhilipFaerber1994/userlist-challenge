import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../../userSchema";

const getAllUser = () => {
  try {
    console.log("user");
  } catch (error) {
    throw error;
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    throw error;
  }
};

const deleteUser = () => {
  try {
  } catch (error) {
    throw error;
  }
};

const updateUser = () => {
  try {
  } catch (error) {
    throw error;
  }
};

export default { getAllUser, createUser };
