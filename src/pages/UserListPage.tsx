import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import { fetchUsers } from "../services/api";
import type { User } from "../types/user";

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   // Later: Change to async await   
  const handleFetchUsers = () => {
    fetchUsers()
    .then((data) => {
      setUsers(data)
    })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
    // Later: open a modal or something like that
  };


    const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) return <p className="text-gray-600">Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>

    <UserForm onUserCreated={handleFetchUsers} />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard 
          key={user.id}
          user={user} 
          onEdit={handleEdit} 
          onDelete={handleDelete} />
      ))}
    </div>
  </div>
);
};