import express, { Request, Response } from "express";
import cors from 'cors';
import { connectDatabase } from "../database/db";
import rootRoutes from "./routes/index.route";

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors({
    origin: /https:\/\/(example\.com|another\.example\.com)/,
  }));

app.use("/api", rootRoutes);

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Server is running on port ${port}`);
});
