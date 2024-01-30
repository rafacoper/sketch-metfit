import mongoose, { Schema, Document } from "mongoose";
import { phoneValidator } from "./validators/phoneValidator";
import { emailValidator } from "./validators/emailValidator";

interface User {
  userName?: string;
  phone: string;
  email: string;
  password: string
}

interface UserModelDocument extends User, Document {}

const UserSchema = new Schema<User>({
  userName: {
    type: String,
    required: true, 
    minlength: [4, 'Tamanho inválido'],
    maxlength: [30, 'Tamanho maior que o permitido']
  },
  email: {
    type: String,
    unique: true, 
    required: true, 
    validate: emailValidator 
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
    select: false 
  },
})

const UserModel = mongoose.model<UserModelDocument>("usuarios", UserSchema);

const getUsers = async () => {
  return UserModel.find().exec();
};

const getUserByEmailOrPhone = async (data: string | number) => {
  return UserModel.findOne({
    $or: [{ email: data }, { phone: data }],
  })
};

const getUserBySessionToken = async (token: string) => {
  return UserModel.findOne({ "authentication.sessionToken": token }).exec();
};

const getUserById = async (id: string) => {
  return UserModel.findById(id).exec();
};

const createUser = async (userModel: User) => {
  const user = new UserModel(userModel);
  await user.save();
  return user.toObject();
};

const updateUserById = async (id: string, values: Record<string, any>) => {
  return UserModel.findByIdAndUpdate(id, values, { new: true }).exec();
};

export { UserModel, getUsers, getUserByEmailOrPhone, getUserBySessionToken, getUserById, createUser, updateUserById };
