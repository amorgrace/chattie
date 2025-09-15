import React from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useNavigate } from "react-router-dom"
import { LogIn, UserPlus } from "lucide-react"

export default function Getstarted() {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-full bg-white font-sora">
      {/* TOP: Lottie - exactly half the viewport */}
      <div className="h-[50vh] w-full flex items-center justify-center -mt-4">
        <DotLottieReact
          src="https://lottie.host/8932a874-d1e9-4ee1-a4da-3e6f17d51652/aVwzx8uHli.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"   // ensures full coverage without distortion
          }}
        />
      </div>

      {/* BOTTOM: curved container exactly the other half */}
      <div className="h-[40vh] w-full bg-white rounded-t-[28px] p-6 flex flex-col justify-center items-center">
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
