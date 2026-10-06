import "dotenv/config";
import express from "express";
import connectDB from "../../03-Database/config/connectDB.js";
import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Expense Manager API is running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/expenses", expenseRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});