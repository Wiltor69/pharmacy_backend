import app from "./app.js";

import mongoose from "mongoose";

const { DB_URI, PORT = 5000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });