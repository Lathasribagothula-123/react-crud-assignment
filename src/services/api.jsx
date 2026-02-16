import axios from "axios";

const API_URL = "http://localhost:3001/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createUser = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateUser = async (id, data) => {
  await axios.put(`${API_URL}/${id}`, data);
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
