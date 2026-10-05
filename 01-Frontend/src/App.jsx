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
    <div>
      <h1>AI Expense Manager</h1>
      <AddExpenseForm onAdd={handleAdd} />
      <h2>Total: ₹{total}</h2>
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
        />
      ))}
    </div>
  );
}

export default App;