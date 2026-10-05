import { useState } from "react";
import ExpenseCard from "./components/ExpenseCard";
import AddExpenseForm from "./components/AddExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Pizza", amount: 450, category: "Food" },
    { id: 2, title: "Bus pass", amount: 800, category: "Transportation" },
    { id: 3, title: "Movie", amount: 300, category: "Entertainment" },
  ]);

  const handleAdd = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

      return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl space-y-4">
        <h1 className="text-3xl font-bold text-indigo-600">
          AI Expense Manager
        </h1>
        <AddExpenseForm onAdd={handleAdd} />
        <h2 className="text-xl font-semibold text-gray-700">Total: ₹{total}</h2>
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;