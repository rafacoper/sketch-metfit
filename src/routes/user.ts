import express from "express";
import {
  addUser,
  deleteUserById,
  getAllUsers,
  getUserByAttribute,
  getUserById,
  updateUserById,
} from "../controllers/userController";

export default (router: express.Router) => {
  // router.get("/user", getAllUsers);
  router.get("/user/:id", getUserById);
  router.get("/user", getUserByAttribute);
  router.post("/user", addUser);
  router.put("/user/:id", updateUserById);
  router.delete("/user/:id", deleteUserById);
};
