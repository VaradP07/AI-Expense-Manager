import { useState } from "react";

function AddExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !amount) return;

    await onAdd({ title, amount: Number(amount), category });

    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-2 rounded-lg bg-white p-4 shadow"
    >
      <input
        className="flex-1 rounded border border-gray-300 p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-28 rounded border border-gray-300 p-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="rounded border border-gray-300 p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Transportation</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
      <button
        type="submit"
        className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Add
      </button>
    </form>
  );
}

export default AddExpenseForm;