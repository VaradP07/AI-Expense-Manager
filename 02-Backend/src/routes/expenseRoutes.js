import { Router } from "express";
import {
  getExpenses,
  getExpenseById,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.js";

const router = Router();

router.get("/", getExpenses);
router.post("/", addExpense);
router.get("/:id", getExpenseById);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;