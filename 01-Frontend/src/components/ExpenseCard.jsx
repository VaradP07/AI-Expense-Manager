function ExpenseCard({ title, amount, category }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
      <p className="text-lg font-bold text-red-600">₹{amount}</p>
    </div>
  );
}

export default ExpenseCard;