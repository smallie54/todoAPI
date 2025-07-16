import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import { connectDB } from "./config/db.js";
import routes from "./routes/index.js";
import cors from "cors";

dotenv.config();

//creating an app
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      process.env.CLIENT_PRODUCTION_URL,
      "https://todoapi-0ep7.onrender.com",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//creating middleware
app.use(express.json());

app.use("/", routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.info(chalk.blue(`SERVER is LIVE http://localhost:${PORT}`));
  });
});
