import mongoose, { Schema, Document } from "mongoose";

export interface Doctor extends Document {
  user: mongoose.Types.ObjectId;
  crm: string;
  specialty: string;
}

const DoctorSchema = new Schema<Doctor>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  crm: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
});

export const DoctorModel = mongoose.model<Doctor>("Doctor", DoctorSchema);
