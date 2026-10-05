// An array of objects: our expense list
const expenses = [
  { title: "Pizza", amount: 450, category: "Food" },
  { title: "Bus pass", amount: 800, category: "Transportation" },
  { title: "Movie", amount: 300, category: "Entertainment" },
  { title: "Groceries", amount: 1200, category: "Food" },
];

// Reading from an array and an object
console.log("First expense:", expenses[0]);
console.log("Its amount:", expenses[0].amount);

// Destructuring: pull values out of an object
const { title, amount } = expenses[0];

// Template string: put variables inside text
console.log(`${title} cost ₹${amount}`);

// Arrow function
const formatMoney = (value) => `₹${value}`;
console.log(formatMoney(450));

// map: transform every item
const titles = expenses.map((e) => e.title);
console.log("Titles:", titles);

// filter: keep only matching items
const foodExpenses = expenses.filter((e) => e.category === "Food");
console.log("Food titles:", foodExpenses.map((e) => e.title));

// reduce: combine everything into one value
const total = expenses.reduce((sum, e) => sum + e.amount, 0);
console.log("Total spent:", formatMoney(total));