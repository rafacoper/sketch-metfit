import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

export const Role = mongoose.model('Role', roleSchema);
