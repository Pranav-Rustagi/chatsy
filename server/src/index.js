import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);


const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, () => {
    console.clear();
    console.log(`Server running on port ${PORT}`);
});