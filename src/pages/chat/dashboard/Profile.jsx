import { useState } from "react"
import { Save, LogOut } from "lucide-react"      // icons
import Nav from "./Nav"                          // adjust the path to Nav.jsx

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Akan Sunday",
    phone: "+234 800 000 0000",
    email: "akan@example.com",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Send formData to backend
    console.log("Updated profile:", formData)
  }

  return (
    <div className="h-screen bg-white flex flex-col">
      <header className="px-4 py-4 border-b border-gray-200 font-semibold text-lg">
        My Profile
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt={formData.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-sm mx-auto"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled                      // <-- email is now uneditable
              className="w-full border rounded-lg px-3 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            <Save size={18} />
            Save Changes
          </button>
        </form>

        <div className="mt-6 w-full max-w-sm mx-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-[#8B4513] text-white py-3 rounded-lg font-medium hover:bg-[#5C4033] transition">
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </div>

      <Nav />
    </div>
  )
}
