import { useNavigate } from "react-router-dom"
import Nav from "../dashboard/Nav"       // adjust path to where Nav.jsx lives

export default function NewChat() {
  const navigate = useNavigate()

  const onlineUsers = [
    { id: 101, name: "Alice", avatar: "https://randomuser.me/api/portraits/women/81.jpg" },
    { id: 102, name: "Ben",   avatar: "https://randomuser.me/api/portraits/men/43.jpg" },
    { id: 103, name: "Clara", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
    { id: 104, name: "Daniel",avatar: "https://randomuser.me/api/portraits/men/72.jpg" },
  ]

  return (
    <div className="h-screen bg-white flex flex-col">
      <header className="px-4 py-4 border-b border-gray-200 font-semibold text-lg">
        Online Users
      </header>

      {/* scrollable list */}
      <div className="flex-1 overflow-y-auto pb-20">
        {onlineUsers.map(user => (
          <div
            key={user.id}
            onClick={() => navigate(`/chat/${user.id}`)}
            className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <h4 className="font-medium text-gray-800">{user.name}</h4>
            <span className="ml-auto text-green-500 text-xs font-semibold">Online</span>
          </div>
        ))}
      </div>

      {/* fixed bottom nav */}
      <Nav />
    </div>
  )
}
