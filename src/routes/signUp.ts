import express from "express";
import { validateSignUpRequest } from "../middlewares/signUp-validation";
import { signUpController } from "../controllers/signUp.controller";

export default (router: express.Router) => {
  router.post("/auth/signup", validateSignUpRequest, signUpController);
};
