import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchExpenses = async () => {
  const response = await api.get("/expenses");
  return response.data;
};

export const createExpense = async (expense) => {
  const response = await api.post("/expenses", expense);
  return response.data;
};

export const removeExpense = async (id) => {
  await api.delete(`/expenses/${id}`);
};