import { useState } from "react"
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import ChatbubbleLP from "/assets/ChatbubbleLP.png"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex flex-col font-sora bg-gray-50">
      {/* Top Lottie section (50%) */}
      <div className="flex-[5] flex items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/c65ce6f5-d9f0-4d53-ba05-30ddae2482e9/PYygplNUA9.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Logo just below Lottie */}
      <div className="flex items-center justify-center mb-4 mr-4">
        <img src={ChatbubbleLP} alt="Logo" className="w-5 h-5 mr-1" />
        <h1 className="text-m font-bold text-gray-900">Chattie</h1>
      </div>

      {/* White card (50%) */}
      <div className="flex-[5] bg-white rounded-t-3xl p-8 shadow-lg">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-8">
          Create Account
        </h1>

        <form className="space-y-4 max-w-md mx-auto">
          {/* Username */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="w-full h-15 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="w-full h-15 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-15 pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-15 bg-purple-700 text-white font-semibold py-3 rounded-xl shadow hover:bg-purple-900 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#5C4033] font-semibold hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  )
}
