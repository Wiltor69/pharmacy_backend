import express from "express";
import ctrl from "../../controllers/apothek.js";

const router = express.Router();

router.get("/", ctrl.getApothek);

router.get("/:apothekId", ctrl.getApothekById);

export default router;
