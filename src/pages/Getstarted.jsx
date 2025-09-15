import React from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useNavigate } from "react-router-dom"
import { LogIn, UserPlus } from "lucide-react"

export default function Getstarted() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-screen w-full bg-white font-sora">
      {/* TOP: Lottie fills half the screen */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md h-full">
          <DotLottieReact
            src="https://lottie.host/8932a874-d1e9-4ee1-a4da-3e6f17d51652/aVwzx8uHli.lottie"
            loop
            autoplay
            style={{ width: "430px", height: "100%" }}
          />
        </div>
      </div>

      {/* BOTTOM: curved container */}
      <div className="flex-1 bg-white rounded-t-[28px] p-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your ideal app, Your ideal relationship.
        </h2>
        <h3 className="text-gray-600 max-w-70 mx-auto leading-relaxed text-sm text-center mb-10">
          Create a unique emotional story that describes better than words
        </h3>

        <button
          onClick={() => navigate("/login")}
          className="relative w-full bg-purple-600 text-white font-semibold py-4 rounded-2xl shadow hover:bg-purple-900 transition duration-300 mb-5 flex items-center justify-center"
        >
          <LogIn className="absolute left-4 w-5 h-5" />
          <span>Login</span>
        </button>

        <button
          onClick={() => navigate("/register")}
          className="relative w-full bg-[#D2B48C] text-gray-800 font-semibold py-4 rounded-2xl shadow hover:bg-[#9b7b56] transition duration-300 flex items-center justify-center"
        >
          <UserPlus className="absolute left-4 w-5 h-5" />
          <span>Register</span>
        </button>
      </div>
    </div>
  )
}
