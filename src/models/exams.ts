import mongoose, { Schema, Document } from "mongoose";


export interface Exams extends Document {
  patientId: mongoose.Types.ObjectId;
  examType: string;
  results: string;
  examDate: Date;
}

const ExamsSchema = new Schema<Exams>({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  examType: {
    type: String,
    required: true,
  },
  results: {
    type: String,
    required: true,
  },
  examDate: {
    type: Date,
    required: true,
  },
});

export const ExamsModel = mongoose.model<Exams>("Exams", ExamsSchema);