import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";

import authRouter from "./routes/api/auth.js";
import apothekRoute from "./routes/api/apothek.js";
import medicineRoute from "./routes/api/medicine.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/apothek", apothekRoute);
app.use("/api/medicine", medicineRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
