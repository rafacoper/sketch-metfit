import mongoose, { Schema, Document } from "mongoose";

export interface Patient extends Document {
  user: mongoose.Types.ObjectId;
  cpf: string;
  dateOfBirth: Date;
  gender: "male" | "female";
}

const PatientSchema = new Schema<Patient>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});

export const PatientModel = mongoose.model<Patient>("Patient", PatientSchema);