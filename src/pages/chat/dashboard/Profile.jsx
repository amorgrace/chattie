import { useState, useEffect } from "react"
import { Save, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Nav from "./Nav"

export default function Profile() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    phone_number: "",
    email: "",
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const token = localStorage.getItem("token")

  // fetch user details immediately but never block UI
  useEffect(() => {
    if (!token) return
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://chattie-backend.onrender.com/user/me/",
          {
            headers: { Authorization: `Token ${token}` },
          }
        )
        setFormData({
          username: res.data.username || "",
          phone_number: res.data.phone_number || "",
          email: res.data.email || "",
        })
      } catch {
        // ignore errors, form stays empty
      }
    }
    fetchUser()
  }, [token])

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.username]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!token) return
    setSaving(true)
    setError("")
    setMessage("")
    try {
      await axios.put(
        "https://chattie-backend.onrender.com/user/me/",
        formData,
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      setMessage("Profile updated successfully.")
    } catch {
      setError("Failed to update profile.")
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    try {
      if (token) {
        await axios.post(
          "https://chattie-backend.onrender.com/auth/log-out/",
          {},
          {
            headers: { Authorization: `Token ${token}` },
          }
        )
      }
    } finally {
      localStorage.removeItem("token")
      navigate("/login")
    }
  }

  return (
    <div className="h-screen bg-white flex flex-col">
      <header className="px-4 py-4 border-b border-gray-200 font-semibold text-lg">
        My Profile
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {message && <p className="text-green-600 mb-4">{message}</p>}

        <div className="flex flex-col items-center mb-6">
          <img
            src="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg"
            alt={formData.username || "Profile"}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-sm mx-auto"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full border rounded-lg px-3 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="mt-5 w-full flex items-center justify-center gap-2 bg-purple-700 text-white py-4 rounded-lg font-medium hover:bg-purple-900 transition"
          >
            <Save size={18} />
            {saving ? "Saving…" : "Save Changes"}
          </button>
        </form>

        <div className="mt-6 w-full max-w-sm mx-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-[#C19A6B] text-white py-4 rounded-lg font-medium hover:bg-[#8B4513] transition"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </div>

      <Nav />
    </div>
  )
}
