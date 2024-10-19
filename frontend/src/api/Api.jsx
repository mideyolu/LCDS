import axios from "axios";

const API_URL = "http://localhost:8000";

// Signup
export const signup = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, {
    username,
    email,
    password,
  });
  return response.data;
};

// Login
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });
  return response.data;
};
