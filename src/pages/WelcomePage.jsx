import { useNavigate } from "react-router-dom"
import ChatbubbleLP from "/assets/ChatbubbleLP.png"
import CoupleLP from "/assets/CoupleLP.png"

export default function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white font-sora">
      <div className="relative text-center px-6 w-full">
        {/* Logo + Title */}
        <div className="flex items-center justify-center mb-6">
          <img src={ChatbubbleLP} alt="Logo" className="w-13 h-10 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Chattie</h1>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-10">
          <img src={CoupleLP} alt="Couple illustration" className="w-74 h-auto" />
        </div>

        {/* Text */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Let's Start The Chat!</h2>

        {/* Subtext (forced 2 lines on mobile) */}
        <p className="text-gray-600 max-w-sm mx-auto leading-relaxed text-sm break-words">
          Connect with friends and family securely <br /> and privately, enjoy!
        </p>

        {/* Button */}
        <div className="mt-15">
          <button
            onClick={() => navigate("/getstarted")}
            className="w-full bg-purple-600 text-x text-white font-semibold py-4 rounded-2xl shadow hover:bg-purple-900 transition duration-300 flex items-center justify-between px-9"
          >
            <span>Get Started</span>
            <span className="text-xl">{">"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
