import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./services/api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    try {
      setUsers(await getUsers());
    } catch {
      setError("Failed to load users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data) => {
    try {
      selectedUser
        ? await updateUser(selectedUser.id, data)
        : await createUser(data);
      setSelectedUser(null);
      loadUsers();
    } catch {
      setError("Failed to save user");
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React CRUD Assignment</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <UserForm onSubmit={handleSubmit} selectedUser={selectedUser} />
      <hr />
      <UserList users={users} onEdit={setSelectedUser} onDelete={handleDelete} />
    </div>
  );
};

export default App;
