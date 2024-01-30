import express from "express";
import signIn from "./signIn";
import signUp from "./signUp";
import user from "./user";

const router = express.Router();

export default (): express.Router => {
  signUp(router);
  return router;
};
