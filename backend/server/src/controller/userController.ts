import { NextFunction, Request, Response } from "express";
import User from "../../userSchema";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await User.find();
    res.status(200).send(allUser);
  } catch (error) {
    throw error;
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = new User(req.body);

    let existingUser;
    try {
      existingUser = await User.findOne({ eMail: newUser.eMail });
    } catch (error) {
      const err = new Error("Error checking existing email");
      return next(err);
    }

    if (existingUser) {
      return res.status(400).send("E-Mail existiert bereits");
    }

    try {
      await newUser.save();
      res.status(200).send("User successfully created");
    } catch (error) {
      const err = new Error("Error saving user");
      return next(err);
    }
  } catch (error) {
    // Handle any other errors that may occur
    return next(error);
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

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
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

export default {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
};
