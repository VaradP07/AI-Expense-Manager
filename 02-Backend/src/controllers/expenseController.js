let expenses = [
  { id: 1, title: "Pizza", amount: 450, category: "Food" },
  { id: 2, title: "Bus pass", amount: 800, category: "Transportation" },
];

export const getExpenses = (req, res) => {
  res.json(expenses);
};

export const addExpense = (req, res) => {
  const { title, amount, category } = req.body;

  if (!title || !amount) {
    return res.status(400).json({ message: "Title and amount are required" });
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount: Number(amount),
    category: category || "Other",
  };

  expenses.unshift(newExpense);
  res.status(201).json(newExpense);
};