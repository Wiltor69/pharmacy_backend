import { Medicine } from "../models/medicines.js";
import { ctrlWrapper } from "../helpers/index.js";

const getMedicine = async (req, res) => {
  const { _id: owner } = req.apothek;
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Medicine.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  res.json(result);
};

const getMedicineById = async (req, res) => {
  const { medicineId } = req.params;
  const result = await Medicine.findById(medicineId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default {
  getMedicine: ctrlWrapper(getMedicine),
  getMedicineById: ctrlWrapper(getMedicineById),
};
