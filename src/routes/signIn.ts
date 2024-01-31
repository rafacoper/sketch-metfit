import express from "express";
import { validateSignInRequest } from "../middlewares/signIn-validation";
import { signInController } from "../controllers/signIn.controller";

export default (router: express.Router) => {
  router.put("/auth/signin", validateSignInRequest, signInController);
};
