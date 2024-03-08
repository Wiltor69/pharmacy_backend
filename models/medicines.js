import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

const medicineSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "apothek",
  },

  name: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  count: {
    type: Number,
  },
});

medicineSchema.post("save", handleMongooseError);

export const getMedicineSchema = Joi.object({
  name: Joi.string(),
  image: Joi.string(),
  price: Joi.number(),
  count: Joi.number(),
});

export const Medicine = model("medicine", medicineSchema);
