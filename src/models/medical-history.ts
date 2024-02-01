import mongoose, { Schema, Document } from "mongoose";

export interface MedicalHistory extends Document {
  patientId: mongoose.Types.ObjectId;
  consultationDate: Date;
  diagnosis: string;
  treatment: string;
  observations: string;
}

const MedicalHistorySchema = new Schema<MedicalHistory>({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  consultationDate: {
    type: Date,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
    required: true,
  },
});

export const MedicalHistoryModel = mongoose.model<MedicalHistory>("MedicalHistory", MedicalHistorySchema);
