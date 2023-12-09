import { Request, Response } from "express";

const getAllUser = () => {
  try {
    console.log("user");
  } catch (error) {
    throw error;
  }
};

const createUser = (req: Request, res: Response) => {
  try {
    // do something
    res.status(200).send("user created");
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
