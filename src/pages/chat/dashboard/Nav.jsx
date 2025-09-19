import { Home, User, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Nav() {
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-4 shadow-lg">
      {/* Home */}
      <button
        onClick={() => navigate("/chat/dashboard")}
        className="flex flex-col items-center text-gray-600 hover:text-purple-700 transition"
      >
        <Home size={22} />
        <span className="text-xs">Home</span>
      </button>

      {/* New Chat */}
      <button
        onClick={() => navigate("/chat/new-chat")}
        className="flex items-center gap-2 bg-[#C19A6B] text-black font-medium px-4 py-3 rounded-full shadow-md hover:bg-[#8B4513] transition"
      >
        <Plus size={18} />
        <span>New Chat</span>
      </button>

      {/* Profile */}
      <button
        onClick={() => navigate("/chat/profile")}
        className="flex flex-col items-center text-gray-600 hover:text-purple-700 transition"
      >
        <User size={22} />
        <span className="text-xs">Profile</span>
      </button>
    </nav>
  )
}
