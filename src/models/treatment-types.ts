import mongoose, { Schema, Document } from "mongoose";

export interface TreatmentTypes extends Document {
  treatmentName: string;
  description: string;
  instructions: string;
}

const TreatmentTypesSchema = new Schema<TreatmentTypes>({
  treatmentName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});

export const TreatmentTypesModel = mongoose.model<TreatmentTypes>("TreatmentTypes", TreatmentTypesSchema);
