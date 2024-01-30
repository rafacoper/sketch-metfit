import express from "express";
import signIn from "./signIn";
import signUp from "./signUp";

const router = express.Router();

export default (): express.Router => {
  signIn(router);
  signUp(router);

  return router;
};
