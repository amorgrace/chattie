import { useEffect } from "react"
import ScreenGuard from "./components/Screenguard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import WelcomePage from "./pages/WelcomePage"
import Getstarted from "./pages/Getstarted"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Chat from "./pages/chat/Chat"

export default function App() {
  useEffect(() => {
    // Fire a GET to wake the Render backend
    fetch("https://chattie-backend.onrender.com/", {
      method: "GET",
      mode: "no-cors"
    }).catch(() => {})
  }, [])

  return (
    <ScreenGuard>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/getstarted" element={<Getstarted />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat/*" element={<Chat />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </ScreenGuard>
  )
}
