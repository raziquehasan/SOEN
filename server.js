import express from "express";
import dotenv from "dotenv";  // If using environment variables
import cors from "cors";      // If you need CORS support
import userRoutes from "./routes/user.routes.js";  // Ensure correct path

dotenv.config();  // Load environment variables

const app = express();

// ✅ Middleware: Enables parsing of JSON request bodies
app.use(express.json());

// (Optional) Enable CORS
app.use(cors());

// ✅ Use routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));
