require("dotenv").config();

import http from "http";
import app from "../index";

const PORT = parseInt(process.env.PORT || "8080");

http.createServer(app).listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

