import { Schema, model, Document } from "mongoose";

export interface RacerType {
  name: string;
}
export interface RacerDocument extends RacerType, Document {}

const RacersSchema = new Schema({
  name: { type: String, required: true },
});
export default model("RacersList", RacersSchema);
