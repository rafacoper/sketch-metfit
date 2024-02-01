import mongoose, { Schema, Document } from "mongoose";

export interface UserAccess extends Document {
  userId: mongoose.Types.ObjectId;
  lastLogin: Date;
}

const UserAccessSchema = new Schema<UserAccess>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const UserAccessModel = mongoose.model<UserAccess>("UserAccess", UserAccessSchema);
