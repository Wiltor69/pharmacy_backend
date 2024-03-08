import { Apothek } from "../models/apothek.js";
import { ctrlWrapper } from "../helpers/index.js";

const getApothek = async (req, res) => {
  const result = await Apothek.find({}, "-createdAt -updatedAt");

  res.json(result);
};

const getApothekById = async (req, res) => {
  const { apothekId } = req.params;
  const result = await Apothek.findById(apothekId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default {
  getApothek: ctrlWrapper(getApothek),
  getApothekById: ctrlWrapper(getApothekById),
};
