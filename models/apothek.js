import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

const apothekSchema = new Schema({
  name: {
    type: String,
  },
  adress: {
    type: String,
  },
});

apothekSchema.post("save", handleMongooseError);

export const getApothekSchema = Joi.object({
  name: Joi.string().required(),
  adress: Joi.string().required(),
});

export const Apothek = model("apothek", apothekSchema);
