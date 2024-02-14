import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./database/init.js";

dotenv.config();
const app = express();

(async () => {
  try {
    await sequelize.sync();
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
