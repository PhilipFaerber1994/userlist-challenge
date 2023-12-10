import express from "express";
const router = express.Router();

import userController from "../controller/userController";

router.get("/", userController.getAllUser);
router.get("/:eMail", userController.findEmail);
router.post("/", userController.createUser);
router.delete("/:userId", userController.deleteUser);
router.put("/:userId", userController.updateUser);

export default router;
