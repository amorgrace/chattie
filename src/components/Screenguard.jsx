import { useEffect, useState } from "react"

export default function ScreenGuard({ children }) {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768) // mobile breakpoint
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 p-6 text-center">
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-m">
          <h1 className="text-x font-bold text-red-600">⚠️Mobile Only</h1>
          <p className="mt-3 text-gray-700">
            This project works only on mobile devices. 
            
          </p>
        </div>
      </div>
    )
  }

  return children
}
