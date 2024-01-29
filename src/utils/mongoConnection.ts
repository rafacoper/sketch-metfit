require("dotenv").config();

import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const USER = process.env.USER;
    const PASS = process.env.PASSWORD;
    const MONGO_URL = `mongodb+srv://${USER}:${PASS}@cluster-antoninio.za6pzcl.mongodb.net/?retryWrites=true&w=majority`;

    await mongoose.connect(MONGO_URL);
    
    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Couldn't connect to Mongo", error);
  }
};

export default connectToMongo;