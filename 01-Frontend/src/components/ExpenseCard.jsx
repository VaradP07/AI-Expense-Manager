function ExpenseCard({ title, amount, category }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        ₹{amount} · {category}
      </p>
    </div>
  );
}

export default ExpenseCard;