import express from "express";
import ctrl from "../../controllers/medicine.js";

const router = express.Router();

router.get("/", ctrl.getMedicine);

router.get("/:medicineId", ctrl.getMedicineById);

export default router;
