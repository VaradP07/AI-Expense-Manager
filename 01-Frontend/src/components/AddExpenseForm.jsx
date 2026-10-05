import { useState } from "react";

function AddExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !amount) return;

    onAdd({ id: Date.now(), title, amount: Number(amount), category });

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transportation</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddExpenseForm;