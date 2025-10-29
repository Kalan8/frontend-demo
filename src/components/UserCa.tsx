import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 border border-gray-200 hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">{user.email}</p>
    </div>
  );
}
