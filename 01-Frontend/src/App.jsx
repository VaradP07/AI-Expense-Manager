import { useState, useEffect } from "react";
import ExpenseCard from "./components/ExpenseCard";
import AddExpenseForm from "./components/AddExpenseForm";
import {
  fetchExpenses,
  createExpense,
  removeExpense,
} from "./services/expenseService";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        setExpenses(await fetchExpenses());
      } catch {
        setError("Could not load expenses. Is the backend running?");
      }
    };
    loadExpenses();
  }, []);

  const handleAdd = async (newExpense) => {
    try {
      const saved = await createExpense(newExpense);
      setExpenses([saved, ...expenses]);
    } catch {
      setError("Could not save the expense.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await removeExpense(id);
      setExpenses(expenses.filter((e) => e._id !== id));
    } catch {
      setError("Could not delete the expense.");
    }
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl space-y-4">
        <h1 className="text-3xl font-bold text-indigo-600">
          AI Expense Manager
        </h1>
        {error && <p className="text-red-600">{error}</p>}
        <AddExpenseForm onAdd={handleAdd} />
        <h2 className="text-xl font-semibold text-gray-700">Total: ₹{total}</h2>
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense._id}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
            onDelete={() => handleDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;