import express from "express";
const router = express.Router();

import userController from "../controller/userController";

router.get("/", userController.getAllUser);
router.post("/", userController.createUser);
router.delete("/");
router.patch("/");

export default router;
