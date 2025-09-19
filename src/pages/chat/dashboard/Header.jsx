import { Plus } from "lucide-react"
import ChatbubbleLP from "/assets/ChatbubbleLP.png"
import sample1 from "/assets/sample1.png"
import sample2 from "/assets/sample2.png"
import sample3 from "/assets/sample3.png"
import sample4 from "/assets/sample4.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Header() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("User")
  const statuses = [sample1, sample2, sample3, sample4, sample1, sample2]

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://chattie-backend.onrender.com/user/me/",
          {
            headers: { Authorization: `Token ${token}` },
          }
        )
        // adjust the field if backend returns 'name' instead of 'username'
        setUsername(res.data.name || res.data.username || "User")
      } catch (err) {
        console.error("Failed to fetch user:", err)
      }
    }
    fetchUser()
  }, [])

  return (
    <header className="bg-white shadow px-4 py-3">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-5 mt-5">
            <img src={ChatbubbleLP} alt="Logo" className="w-7 h-6 mr-2" />
            <h1 className="text-lg font-bold text-gray-900 mt-1">Chattie</h1>
          </div>
          <p className="text-sm text-gray-600 mb-2">Hello, {username}</p>
        </div>

        <button
          onClick={() => navigate("/chat/new-chat")}
          className="p-2 rounded-full bg-[#C19A6B] text-black"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Status Row */}
      <div className="mt-5 flex space-x-5 overflow-x-auto hide-scrollbar">
        {statuses.map((src, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-17 h-17 rounded-full border-2 border-purple-600 p-1">
              <img
                src={src}
                alt={`status-${index}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">User {index + 1}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
