import mongoose, { Schema, Document } from "mongoose";
import { phoneValidator } from "./validators/phoneValidator";
import { emailValidator } from "./validators/emailValidator";
export interface User {
  userName?: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}

export interface UserWithoutPassword extends Omit<User, 'password'> {}

interface UserModelDocument extends User, Document {}

const UserSchema = new Schema<User>({
  userName: {
    type: String,
    required: true,
    minlength: [4, "Tamanho inválido"],
    maxlength: [30, "Tamanho maior que o permitido"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: emailValidator,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    // validate: phoneValidator
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    required: true,
    ref: "Role",
  },
});

export const UserModel = mongoose.model<UserModelDocument>(
  "users",
  UserSchema
);
