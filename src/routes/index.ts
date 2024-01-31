import express from "express";
import signIn from "./signIn";
import user from "./user";

const router = express.Router();

export default (): express.Router => {
  signIn(router);
  user(router);

  return router;
};
