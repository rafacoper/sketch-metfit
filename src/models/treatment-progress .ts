import mongoose, { Schema, Document } from "mongoose";

export interface TreatmentProgress extends Document {
  patientId: mongoose.Types.ObjectId;
  treatmentTypeId: mongoose.Types.ObjectId;
  startDate: Date;
  endDate?: Date;
  observations: string;
  progress: string;
}

const TreatmentProgressSchema = new Schema<TreatmentProgress>({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  treatmentTypeId: {
    type: Schema.Types.ObjectId,
    ref: "TreatmentTypes",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  observations: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true,
  },
});

export const TreatmentProgressModel = mongoose.model<TreatmentProgress>("TreatmentProgress", TreatmentProgressSchema);
