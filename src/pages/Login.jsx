import { useState } from "react"
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import ChatbubbleLP from "/assets/ChatbubbleLP.png"
import axios from "axios"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setError("")
    setMessage("")
    setLoading(true)

    try {
      const res = await axios.post(
        "https://chattie-backend.onrender.com/auth/log-in/",
        { email: form.email, password: form.password },
        {
          withCredentials: true,
          timeout: 20000, // ⏱️ 10-second timeout
        }
      )

      const token = res.data.key // adjust if your key name differs
      if (token) {
        localStorage.setItem("token", token) // store token for later API calls
      }

      setMessage("Login successful. Redirecting...")
      setTimeout(() => navigate("/chat/dashboard/"), 2000)
    } catch (err) {
      if (err.code === "ECONNABORTED") {
        // axios sets this code on timeout
        setError("Server is waking up. Try again, it will work.")
      } else {
        setError(
          err.response?.data?.detail ||
            err.response?.data?.error ||
            "Login failed"
        )
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col font-sora bg-gray-50">
      {message && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-4 px-6 py-3 bg-green-600 text-white font-medium text-sm rounded-xl shadow-lg animate-slideDown z-50 whitespace-nowrap">
          {message}
        </div>
      )}
      {error && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-4 px-6 py-3 bg-red-600 text-white font-medium text-sm rounded-xl shadow-lg animate-slideDown z-50 whitespace-nowrap">
          {error}
        </div>
      )}

      <div className="flex-[5] flex items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/c65ce6f5-d9f0-4d53-ba05-30ddae2482e9/PYygplNUA9.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="flex items-center justify-center mb-4 mr-4">
        <img src={ChatbubbleLP} alt="Logo" className="w-5 h-5 mr-1" />
        <h1 className="text-m font-bold text-gray-900">Chattie</h1>
      </div>

      <div className="flex-[5] bg-white rounded-t-3xl p-8 shadow-lg">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-8">
          Welcome Back
        </h1>

        <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-15 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full h-15 pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-15 bg-purple-700 text-white font-semibold py-3 rounded-xl shadow hover:bg-purple-900 transition duration-300 flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          New here?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-[#5C4033] font-semibold hover:underline"
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  )
}
