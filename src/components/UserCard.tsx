import { Pencil, Trash2 } from "lucide-react"; 
import type { User } from "../types/user";

type UserCardProps = {
  user: User,
  onEdit: (user: User) => void,
  onDelete: (id: number) => void
}

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow hover:shadow-md transition-all border border-gray-100">
      {/* User info */}
      <h3 className="text-lg font-semibold text-gray-800">
        {user.name} {user.surname} {user.email}
      </h3>
      {/* Action buttons */}
      <button
        title="Edit"
        onClick={() => onEdit(user)}
        className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-600 border border-blue-300 rounded-xl hover:bg-blue-50 transition">
        <Pencil size={16} />
      </button>
      <button
        onClick={() => onDelete(user.id)}
        className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-red-600 border border-red-300 rounded-xl hover:bg-red-50 transition">
        <Trash2 size={16} />
      </button>
  </div>
);
export default UserCard;
